---
title: "test"
date_created: 2026-10-05T14:34:49+08:00
date_modified: 2026-10-06T15:40:22+08:00
input:
  流程:
    - 序號: 1
      項目: []
      名稱: 流程
      本機: ""
      限期:
        - 2026-10-14
        - 2026-10-15
      事件: 請協助更換deadline服務電話輪值
      交換對象:
        單位: 營三
        姓名: 丁戊己
  負責承辦:
    姓名: 甲乙丙
draft: false
date: 2026-10-06
---


`$=dv.span("INLINE SPAN")`

`$=dv.current().file.name`

`$=dv.view("Extra/Scripts/test-view")`

[button](obsidian://adv-uri?vault=notes&commandid=quickadd%3ArunQuickAdd)

`$=dv.current().input.負責承辦.姓名.substring(1)`，您好，<br><br>

<以下建議以 HTML 格式檢視>
請協助更換客服<span class="dynamic-date" data-date-format="YYYY"></span>，謝謝~

|日期|**`$=(()=>{dv.view("Extra/Scripts/date-input", { flowIndex: 1, dayIndex: 1, timeFormat: "MM/DD(ddd)" });})()`**|**`$=(()=>{dv.view("Extra/Scripts/date-input", { flowIndex: 1, dayIndex: 2, timeFormat: "MM/DD(ddd)" });})()`**|
|:-:|:-:|:-:|
|原本|誰|`$=dv.current().input.流程[0].交換對象.姓名.substring(1)`|
|改為|`$=dv.current().input.流程[0].交換對象.姓名.substring(1)`|誰|

- 輪值表在公用區位置如下：「`$=(()=>{dv.view("Extra/Scripts/flow-path-manager", { mode: "link_of_remote", flowIndex: 1, keys: ["遠端"] });})()`」。

```dataviewjs
dv.el("div", "Hello Quartz");
```

````dataviewjs
// 1. 自動取得當前民國年與月份
const now = DateTime.now().plus({ months: 1 }); // 以「下個月」作為新聞稿目標月份
const currentYear = now.year;
const rocYear = currentYear - 1911; // 計算民國年 (例如 2026 -> 115)
const currentMonth = now.month; // 當前月份 (1-12)

// 2. 參數設定
const taxType = "營業稅";
const targetMonthStr = `${rocYear}年${currentMonth}月`;
const count = 3;

/**
 * 取得營業稅期別字串 (如: "115 年 9-10 月期")
 */
function getTaxPeriodLuxon(dt = DateTime.now().plus({ months: -1 })) {
	const month = dt.month;
	const endMonth = month % 2 === 0 ? month : month + 1;
	const startMonth = endMonth - 1;
	const rocYear = dt.year - 1911;

	return `${rocYear} 年 ${startMonth}-${endMonth} 月`;
}

// 3. 組裝動態 Prompt 文字（微調版：強制分散選題、避免時間判定模糊）
const promptText = `【系統時空設定】目前時間點為民國 ${rocYear} 年 ${currentMonth} 月。
【目標設定】
- 目標稅目：${taxType}
- 目標月份：${targetMonthStr}
- 產出數量：${count} 篇

【執行規則】
1. 標題與主題：
	- 【選題強制分散】優先避免 ${count} 篇均集中於同一來源檔案。如無適當題材，不得為滿足來源分散而硬選不相關或不適用題材。
	- 「主題」係指主要稅務議題、適用對象及核心法令均高度相同之內容，不以標題文字不同即視為不同主題。
	- 絕對不可採用 ${rocYear - 2}年${currentMonth}月至${targetMonthStr} 期間出現過的任何臺北國稅局新聞稿標題與主題。
	- ${count} 篇彼此之間的標題必須完全相異。
2. 結構與用詞：參考臺北國稅局近 2 年（即 114 年 2 月以後發布者）同類型新聞稿的段落結構、公務用語及法條引述口氣。不要寫聯絡人那一段。
3. 關於數字與日期：
	- 舉例之金額除依法條規定外，不得和原發布版本相同，盡量以整數為例（如 10 萬、200 萬等），且雙方約定金額（如房屋款與土地款）盡量不要相同。
	- 【重要】案例日期不得沿用原稿日期，原則上固定設定於目標月份前幾期；交易日期、進銷貨日期或發票期別，請使用「${getTaxPeriodLuxon(DateTime.now().plus({ months: -3 }))}」或「${getTaxPeriodLuxon(DateTime.now().plus({ months: -1 }))}」等指定期間。
	- 數字案例僅作為說明性假設，不得使讀者誤認為實際查獲案件；案例金額須可經人工重新計算驗證。
4. 輸出限制：只輸出結果，嚴禁任何前言、說明或結語，但每篇開頭須明確標明引用參考來源。若未標記來源標號 [1]、[2]，視為不符合格式要求。
5. 【強制引註規範】內文凡論述法規條文、法律要件，或引用來源資料中的具體事實，該句句末「絕對必須」加上 Gemini Notebook 的來源標號（例如：[1]、[2]）。
	- AI自行設定之假設案例、金額、日期及計算結果，不得虛構或強行附加來源標號。
	- 若內容無法由目前 Notebook 來源資料確認，不得自行製造來源標號。

【輸出格式】
### [標題]
- 引用來源：[檔案名稱，要附來源標號]（原發布年月：ＯＯ年ＯＯ月）
- 資料來源說明
	- [條列來源，如：加值型及非加值型營業稅法第1條、第3條、第28條及第51條第1項第1款。]

[內文]

---
${count == 1 ? '':'[重複上述格式輸出第 2 篇、第 3 篇......]'}`;

// 4. 於閱讀模式下渲染為「可一鍵複製的 Markdown 程式碼區塊」
dv.paragraph("```markdown\n" + promptText + "\n```");
````

```dataviewjs
await dv.view("Extra/Scripts/get_path");
```

```dataviewjs
await dv.view("Extra/Scripts/test-view");
```