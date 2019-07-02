import { Emitter } from 'ts-jutil/es5/emitter';
import { UpdateRunner } from 'ts-jutil/es5/UpdateRunner';
import { getWindowSize, IWindowSize } from './getWindowSize';
import { requestAnimationFrame } from './requestAnimationFrame';

export interface IWindowSizeEvent {
  width: number;
  height: number;
  prevWidth: number | null;
  prevHeight: number | null;
}

export const defaultWidth = 1366;
export const defaultHeight = 768;

const noop = (): void => undefined;

export class WindowResizeEmitter<R = void | Promise<void>> extends Emitter<
  IWindowSizeEvent,
  R
> {
  get enabled(): boolean {
    return typeof window !== 'undefined';
  }

  public prevSize: IWindowSize | null = null;
  public listening = false;

  public handleResize = this.enabled
    ? (): void => {
        if (this._runner) {
          this._runner.queue();
        }
      }
    : noop;

  private _runner?: UpdateRunner;

  public start(): boolean {
    if (this.enabled && !this.listening) {
      this.prevSize = getWindowSize();
      this._runner = new UpdateRunner((): Promise<void> => this.run());
      window.addEventListener('resize', this.handleResize);
      this.listening = true;
      return true;
    }
    return false;
  }

  public end(): boolean {
    if (this.enabled && this.listening) {
      this._runner = undefined;
      window.removeEventListener('resize', this.handleResize);
      this.listening = false;
      return true;
    }
    return false;
  }

  private run(): Promise<void> {
    return new Promise((resolve, reject): void => {
      requestAnimationFrame(async () => {
        try {
          const size = getWindowSize();
          if (size) {
            const { prevSize } = this;
            await Promise.all(
              this.emitGet({
                width: size.width,
                height: size.height,
                prevWidth: prevSize && prevSize.width,
                prevHeight: prevSize && prevSize.height,
              })
            );
            this.prevSize = size;
          }
          resolve();
        } catch (e) {
          reject();
        }
      });
    });
  }
}
