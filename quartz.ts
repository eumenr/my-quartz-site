import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import DynamicDate from "./quartz/components/custom/DynamicDate"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

layout.afterBody.push(DynamicDate)
export { layout }