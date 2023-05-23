import { Env } from "zhi-env";
import SiyuanConfig from "./siyuanConfig";
/**
 * 思源笔记API
 *
 * @author terwer
 * @since 1.0.0
 */
declare class SiyuanApi {
    /**
     * 思源笔记内核API
     */
    readonly kernelApi: any;
    /**
     * 思源笔记客户端API
     */
    readonly clientApi: any;
    /**
     * 构造思源 API对象
     *
     * @param cfg - 环境变量 或者 配置项
     */
    constructor(cfg: Env | SiyuanConfig);
}
export default SiyuanApi;
