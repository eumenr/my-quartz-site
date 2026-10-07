import type {
	QuartzComponent,
	QuartzComponentConstructor,
} from "../types"

import script from "./dynamic-date.inline"

const DynamicDate: QuartzComponent = () => {
	return null
}

DynamicDate.afterDOMLoaded = script

export default (() => DynamicDate) satisfies QuartzComponentConstructor