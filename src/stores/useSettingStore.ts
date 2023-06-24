import { defineStore } from "pinia"
import { SypConfig } from "~/syp.config.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { useCommonStorageAsync } from "~/src/stores/common/useCommonStorageAsync.ts"
import { computed, ref } from "vue"

/**
 * 设置配置存储
 * https://pinia.vuejs.org/ssr/nuxt.html
 */
export const useSettingStore = defineStore("setting", () => {
  const logger = createAppLogger("use-setting-store")
  const storageKey = "/data/storage/syp/sy-p-cfg.json"
  const initialValue = SypConfig
  const { commonStore } = useCommonStorageAsync<typeof SypConfig>(storageKey, initialValue)
  const settingRef = ref<typeof SypConfig | null>(null)

  const getSettingRef = computed(async () => {
    const setting = await commonStore.get()
    logger.info("get data from setting=>", setting)
    settingRef.value = setting
    return setting
  })

  /**
   * 获取配置
   */
  const getSetting = async (): Promise<typeof SypConfig> => {
    if (settingRef.value === null) {
      logger.info("Setting not initialized. Initializing now...")
      // 如果设置还没有被初始化，则调用 getSettingRef 函数
      const setting = getSettingRef.value
      logger.info(`Loaded setting from remote api`)
      return setting ?? {}
    }
    logger.info(`Loaded setting from cached.`)
    return settingRef.value ?? {}
  }

  /**
   * 修改配置
   *
   * @param setting - 需要修改的配置
   */
  const updateSetting = async (setting: Partial<typeof SypConfig>) => {
    logger.info("update setting=>", setting)
    await commonStore.set(setting)
    settingRef.value = { ...settingRef.value, ...setting }
  }

  return { getSetting, updateSetting }
})
