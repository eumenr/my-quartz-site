function updateDynamicDates() {
	const now = new Date()

	document.querySelectorAll<HTMLElement>(".dynamic-date").forEach((element) => {
		const format = element.dataset.dateFormat ?? "YYYY"

		const value = format
			.replace("YYYY", String(now.getFullYear()))
			.replace("MM", String(now.getMonth() + 1).padStart(2, "0"))
			.replace("DD", String(now.getDate()).padStart(2, "0"))

		element.textContent = value
	})
}

document.addEventListener("nav", updateDynamicDates)