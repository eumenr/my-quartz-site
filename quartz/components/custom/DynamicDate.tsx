import type { QuartzComponent } from "../types"
import script from "./dynamic-date.inline"

const DynamicDate: QuartzComponent = () => null

DynamicDate.afterDOMLoaded = script

export default DynamicDate