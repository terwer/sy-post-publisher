import WindowManager from "./WindowManager";
/**
 * 这里统一挂载一个方法，可以打开 Electron 的 BrowserWindow
 *
 * @author terwer
 * @version 1.0.0
 * @since 1.0.0
 */
declare class ZhiBrowserWindow {
    private logger;
    private readonly windowManager;
    constructor();
    init(logger: any, common: any): void;
    /**
     * 挂载 BrowserWindow
     *
     * @author terwer
     * @since 1.0.0
     */
    initBrowserWindow(): WindowManager;
}
export default ZhiBrowserWindow;
//# sourceMappingURL=index.d.ts.map