// @ts-nocheck

const updateDynamicDate = () => {
	const now = new Date()

	document.querySelectorAll(".dynamic-date").forEach((el) => {
		const format = el.dataset.dateFormat ?? "YYYY"

		el.textContent = format
			.replace("YYYY", String(now.getFullYear()))
			.replace("MM", String(now.getMonth() + 1).padStart(2, "0"))
			.replace("DD", String(now.getDate()).padStart(2, "0"))
	})
}

document.addEventListener("nav", updateDynamicDate)