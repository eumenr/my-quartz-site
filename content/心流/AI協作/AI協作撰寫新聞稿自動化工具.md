---
title: "[筆記]新聞稿工具"
date_created: 2026-08-19T09:39:43+08:00
date_modified: 2026-10-28T14:55:05+08:00
share_link: https://share.note.sx/6dd9jk6e
share_updated: 2026-09-19T07:45:26+08:00
date: 2026-09-27
draft: false
---

# AI協作撰寫新聞稿自動化工具

> **檔案說明**：本筆記彙整無 IT 背景稅務員使用 Gemini Notebook 產製國稅新聞稿草稿之 SOP，並收錄新聞稿自動爬取、整理與法規檢索之 Python 自動化腳本。

---

[TOC]

## 快速導覽與資源連結

- **AI 工作區**：[Gemini Notebook 資源庫](https://notebook.google.com/notebook/b2e3ae70-7a15-4baa-9476-7d33be3032c9)
- **實體成果共享**：
	- 📊 [簡報](https://is.gd/x6ukaP)

### 資料來源

> [!info]+ 筆記
>> [!col2]
>> - [[新聞稿 AI 協作指南簡報]]
>> - [[AI協作撰寫新聞稿自動化工具]]
>> - [[AI協作撰寫新聞稿速查手冊]]
>>
>> ```text-nowrap
>> https://eumenr.pages.dev/心流/ai協作/新聞稿-ai-協作與自動化工具
>> https://share.note.sx/bjzq7t5f
>> https://eumenr.pages.dev/心流/ai協作/協作速查手冊
>> ```

> [!info]+ 檔案 from [00.新聞稿](file://///stsarw09/%E5%85%AC%E7%94%A8%E5%8D%80/%E9%8A%B7%E5%94%AE%E7%A8%85%E7%B5%84/%E5%96%AE%E4%BD%8D%E5%85%A7%E9%83%A8%E5%82%B3%E9%81%9E/%E6%96%B0%E8%81%9E%E7%A8%BF%E5%8F%8A%E6%9C%83%E7%A8%BF/00.%E6%96%B0%E8%81%9E%E7%A8%BF)
>> [!col2]
>> - [[tax_news_臺北國稅局_111年]]
>> - [[tax_news_臺北國稅局_112年]]
>> - [[tax_news_臺北國稅局_113年]]
>> - [[tax_news_臺北國稅局_114年]]
>> - [[tax_news_臺北國稅局_115年]]
>> - [[tax_news_高雄國稅局]]
>> - [[tax_news_北區國稅局]]
>> - [[tax_news_中區國稅局]]
>> - [[tax_news_南區國稅局]]
>>
>> ```text-nowrap
>> tax_news_臺北國稅局_111年.md
>> tax_news_臺北國稅局_112年.md
>> tax_news_臺北國稅局_113年.md
>> tax_news_臺北國稅局_114年.md
>> tax_news_臺北國稅局_115年.md
>> tax_news_高雄國稅局.md
>> tax_news_北區國稅局.md
>> tax_news_中區國稅局.md
>> tax_news_南區國稅局.md
>> ```

## 第一部分：利用 AI 產製新聞稿 SOP

### 任務背景與系統設定

- **核心目標**：協助無 IT 背景之稅務員，透過 Gemini Notebook 將歷年新聞稿轉化為全新新聞稿草稿。
- **情境時間軸**：以民國 115 年 10 月為預設基準時空。

### 資料來源與格式規範

- **資料夾配置**：公用區 `00.新聞稿`（內含 111–114 年標準 Markdown 格式檔）。
- **最新資料補充**：人工補齊 115 年最新資料並傳輸至外網環境。
- **來源檔案範例與標籤結構**：
	```markdown
	### [新聞稿標題]
	
	- 發布日期：115年01月
	- 主辦股別：查一
	- 資料來源說明：
		- item 1
		- item 2
	
	[內文]
	
	---
	```
	^7tjn1n

### 提問紀錄與 Prompt 迭代演進實務

**紀錄說明**：本區塊完整收錄專案執行時之情境設定、原始資料規範、傳入 AI 之 Prompt 範本、衍生資源與提問對話紀錄，作為後續提示詞（Prompt）調整與版本迭代之依據。

`````
【任務背景與目標】
本任務旨在建立一套 SOP，指導國稅局內無 IT 背景的稅務員使用 Gemini Notebook（Google 免費 AI 工具），將歷年國稅局新聞稿及現行法規匯入後，快速且正確地產出全新的新聞稿草稿。
【系統時空設定】：假設當前時間為民國 115 年 10 月。

---

### 1. 歷年資料來源與格式規範

1. 新聞稿 .md 檔案格式範例：
	 ```markdown
	 ### [標題]

	 - 發布日期：115年01月
	 - 主辦股別：查一
	 - 資料來源說明
		 - 一、所得稅法第14條第1項第10類及第110條。
		 - 二、稅捐稽徵法第48條之1。
	 
	 [內文]
	 
	 ---
	 [重複上述格式輸出第2篇、第3篇......]
	 ```

2. 來源檔案名稱清單：
	 - `tax_news_中區國稅局.md`
	 - `tax_news_北區國稅局.md`
	 - `tax_news_南區國稅局.md`
	 - `tax_news_高雄國稅局.md`
	 - `tax_news_臺北國稅局_111年.md` ~ `tax_news_臺北國稅局_115年.md`

3. 匯入與整理流程：
	 - **內網電腦**：使用公用區 `00.新聞稿` 內 111~114 年 Markdown 格式檔。補齊 115 年資料時，逐篇確認「發布年月、標題、主辦單位、內文、法條依據」後新增。
	 - **外網電腦**：透過 Google Colab 程式擷取非臺北國稅局新聞稿，抽查確認檔名、標題、日期及內文完整性後上傳。
	 - **Gemini Notebook 上傳**：將所有 `.md` 檔案直接新增上傳至 Gemini Notebook 左側「資料來源（Sources）」窗格。

---

### 2. 最終優化迭代提示詞範本（Prompt Standard v2.0）

> **迭代說明**：本版本整合了初始 Prompt、法規來源防呆限制、待人工查核標註、引註規範強化與金額日期案例防鎖定規則。

````markdown
【系統時空設定】目前時間點為民國 115 年 10 月。
【目標設定】
- 目標稅目：營業稅
- 目標月份：115年10月
- 產出數量：3 篇

【執行規則】
1. 標題與主題：
	- 【選題強制分散】3 篇主題必須分別來自不同的來源檔案，絕對不可全部來自同一個檔案。
	- 絕對不可採用 113年10月至115年10月 期間出現過的任何臺北國稅局新聞稿標題與主題。
	- 3 篇彼此之間的標題必須完全相異。
2. 結構與用詞：完全模仿臺北國稅局近 2 年（即 114 年 2 月以後發布者）同類型新聞稿的段落結構、公務用語及法條引述口氣。不要寫聯絡人那一段。
3. 關於數字與日期：
	- 舉例之金額除依法條規定外，不得和原發布版本相同，盡量以整數為例（如 10 萬、200 萬等），且雙方約定金額（如房屋款與土地款）盡量不要相同。
	- 【重要】內文案例中的交易日期、進銷貨日期或發票期別，**統一設定在「115 年 5-6 月 至 115 年 7-8 月」期間**（例如：115年8月間、115 年 7-8 月期等）。
4. 輸出限制：只輸出結果，嚴禁任何前言、說明或結語，但每篇開頭須明確標明引用參考來源。若未標記來源標號 [1]、[2]，視為不符合格式要求。
5. 【強制引註規範】內文凡論述法規條文、要件或引用具體事實時，該句句末「絕對必須」加上 Gemini Notebook 的來源標號（例如：[1]、[2]）。請確保每一段說明法條的句子結尾都有帶出編號，不可遺漏。

【輸出格式】
```markdown
### [標題]
- 引用來源：[檔案名稱，要附來源標號]（原發布年月：ＯＯ年ＯＯ月）
- 資料來源說明
	- [條列來源，如：加值型及非加值型營業稅法第1條、第3條、第28條及第51條第1項第1款。]

[內文]

---
[重複上述格式輸出第 2 篇、第 3 篇......]
```
````

---

### 3. 操作規範與完稿防呆審查 SOP

1. **AI 角色與定位**：Gemini Notebook 係輔助草擬，非替代最終審查。來源引註（如 `[1]`）為核對線索，承辦人仍須人工驗證真實性。
2. **審查四大 CheckList**：
	- **題材檢查**：確認標題未與近 2 年重複、範疇屬於銷售稅組業務，且無他局名稱。
	- **法規對照**：逐條對照最新有效法規與函釋，核對條號、項次、處罰及適用要件。
	- **數字算術驗證**：人工重新計算案例金額、稅額、比例與發票期別，確保 logic 正確。
	- **發布前審查**：補全主辦單位與聯絡資訊，重大裁罰或新法上路稿件須送主管審稿。

3. **相關資源連結**：
	- 專案 Notebook 庫：[Gemini Notebook](https://notebook.google.com/?authuser=1)
	- 衍生產出物：[筆記](https://eumenr.pages.dev/心流/新聞稿ai實戰指南/新聞稿-ai-協作與自動化工具) | [簡報](https://share.note.sx/bjzq7t5f) | [速查](https://eumenr.pages.dev/心流/新聞稿ai實戰指南/新聞稿-ai-協作速查手冊)

`````

### 提問產製新聞稿

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

	return `${rocYear}年${startMonth}-${endMonth}月`;
}

// 3. 組裝動態 Prompt 文字（微調版：強制分散選題、避免時間判定模糊）
const promptText = `【本次設定】
- 目標稅目：[${taxType}]
- 目標月份：[${targetMonthStr}]
- 產出數量：[${count}篇]
- 案例日期範圍：[${getTaxPeriodLuxon(DateTime.now().plus({ months: -3 }))}至${getTaxPeriodLuxon(DateTime.now().plus({ months: -1 }))}]

【執行規則】
1. 標題與主題：
	- 選題基本條件：題材須符合本局業務範圍及本次指定稅目。
	- 選題時，應確認法規依據及宣導內容有可靠來源支持。
	- 如無足夠且可查證的題材，不得為湊足篇數而捏造法律依據或事實。
	- 優先避免每篇均集中於同一來源檔案。如無適當題材，不得為滿足來源分散而硬選不相關或不適用題材。
	- 「主題」係指主要稅務議題、適用對象及核心法令均高度相同之內容，不以標題文字不同即視為不同主題。
	- 不得採用臺北國稅局於 ${rocYear - 2}年${currentMonth}月至${targetMonthStr} 期間已發布之新聞稿標題或核心主題；判斷主題是否重複時，應比較其主要稅務議題、適用對象及核心法令，而非僅比較標題文字。
	- 各篇彼此之間的標題必須完全相異。
2. 結構與用詞：參考臺北國稅局近 2 年（即 114 年 2 月以後發布者）同類型新聞稿的段落結構、公務用語及法條引述口氣。不要寫聯絡人那一段。
3. 關於數字與日期：
	- 舉例之金額除依法條規定外，不得和原發布版本相同，盡量以整數為例（如 10 萬、200 萬等），且雙方約定金額（如房屋款與土地款）盡量不要相同。
	- 【重要】案例日期不得沿用原稿日期，原則上設定於目標月份前幾期；交易日期、進銷貨日期或發票期別，請使用「【案例日期範圍】」內的期間。法規規定的申報期別、法定期限及其他必要日期，不受此限制，不得擅自更改；目標月份之後尚未到來的期間或日期，不得寫成已發生、已開始或已屆至的事實。若無法確認正確表述，標示「【待人工查核】」。
	- 數字案例僅作為說明性假設，不得使讀者誤認為實際查獲案件；案例金額須可經人工重新計算驗證。
	- 假設案例應以「例如」或「假設」明確表達，不得寫成實際查獲案件。
4. 輸出限制：只輸出結果，嚴禁任何前言、說明或結語，但每篇開頭須明確標明引用參考來源。若未標記來源標號 [1]、[2]，視為不符合格式要求。
5. 【強制引註規範】內文凡論述法規條文、法律要件，或引用來源資料中的具體事實，該句句末「絕對必須」加上 Gemini Notebook 的來源標號（例如：[1]、[2]）。
	- AI 自行設定之假設案例、金額、日期及計算結果，不得虛構或強行附加來源標號。
	- 若內容無法由目前 Notebook 來源資料確認，不得自行製造來源標號。

【輸出格式】

### [標題]
- 引用來源：[檔案名稱，要附來源標號]（原發布年月：ＯＯ年ＯＯ月）
- 資料來源說明
	- [條列來源，如：加值型及非加值型營業稅法第1條、第3條、第28條及第51條第1項第1款。]

[內文]

---
${count == 1 ? '':'[重複上述格式輸出第 2 篇、第 3 篇......直至【產出數量】]'}`;

// 4. 於閱讀模式下渲染為「可一鍵複製的 Markdown 程式碼區塊」
dv.paragraph("```markdown\n" + promptText + "\n```");
````

## 第二部分：Python 資料自動化處理腳本

### 內部 ODT 檔案轉 Markdown 彙整器

- **適用對象**：內部公用區 `00.新聞稿` 歷年檔案。
- **核心功能**：
	- 自動辨識與過濾英文新聞稿。
	- 解析 ODT 文件之標題、發布日期、內文與資料來源。
	- **自動化股別判定**：優先比對檔名，無匹配時透過「聯絡人分機」反查主辦股別（如 `1730 -> 查一`）。
- **使用模組**：`python-docx`/`odfpy`, `pathlib`, `re`

#### 代碼

```python
import os
import re
from pathlib import Path
from odf.opendocument import load
from odf.text import P, H
from datetime import datetime

now = datetime.now().astimezone()
formatted_time = now.isoformat(timespec='seconds')

username = os.environ.get('USER') or os.environ.get('USERNAME')
base_dir = os.path.expanduser(rf"D:\[{username}]\Defaults\Downloads\6. 臨時交辦\115年度\115-09-02 讀書會-AI應用\新聞稿")
base_dir = r"\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿"

# 聯絡人分機對應主辦股別之對照表
EXT_TO_BRANCH = {
	"1730": "查一",
	"1750": "查二",
	"1760": "查三",
	"1710": "特消",
	"1850": "營一",
	"1830": "營二",
	"1810": "營三",
}

def fix_long_path(path_str):
	abs_p = str(Path(path_str).resolve())
	if os.name == 'nt' and not abs_p.startswith('\\\\?\\'):
		if abs_p.startswith('\\\\'):
			return '\\\\?\\UNC\\' + abs_p[2:]
		return '\\\\?\\' + abs_p
	return abs_p

def parse_odt_to_md(file_path, file_name, month_str):
	# 檔名含「英文新聞稿」直接剔除
	if "英文新聞稿" in file_name:
		return None

	doc = load(fix_long_path(file_path))
	paragraphs = [str(e).strip() for e in doc.getElementsByType(P) + doc.getElementsByType(H) if str(e).strip()]
	full_text = "\n".join(paragraphs)
	
	title_match = re.search(r"新聞標題[：\:\s]*\n?([^\n]+)", full_text)
	title = title_match.group(1).strip() if title_match else ""
	
	# 判斷標題是否為全英文/純 ASCII
	if not title or title.isascii():
		return None

	# 1. 優先從檔名提取股別（匹配：營一~營三、查一~查三、特消、審一~審四、法務等）
	branch_match = re.search(r"(營[一二三四]|查[一二三四]|特消|審[一二三四]|法務)", file_name)
	branch = branch_match.group(1) if branch_match else ""
	
	# 2. 若檔名未提取到股別，則依聯絡人分機號碼自動補全
	if not branch:
		# 搜尋聯絡人資訊中的分機號碼（優先匹配帶有「分機」或「轉」之數字，或獨立出現之對應分機）
		ext_match = re.search(r"(?:分機|轉|\b)(1730|1750|1760|1710|1850|1830|1810)\b", full_text)
		if ext_match:
			ext_num = ext_match.group(1)
			branch = EXT_TO_BRANCH.get(ext_num, "")

	sources = []
	source_match = re.search(r"資料來源說明\n((?:[^\n]+\n?)+?)(?=\n*(?:會稿|發布時機|財政部|新聞標題))", full_text)
	if source_match:
		for line in source_match.group(1).split("\n"):
			line = line.strip()
			if line and not any(k in line for k in ["會稿", "發布時機", "承辦單位"]):
				sources.append(f"\t- {line}")
	source_str = "\n".join(sources)
	
	body_match = re.search(r"(財政部[^\n]*表示[\s\S]*?（聯絡人[^\n]*）)", full_text)
	body_str = body_match.group(1).strip() if body_match else ""
	
	return f"### {title}\n\n- 發布日期：{month_str}\n- 主辦股別：{branch}\n- 資料來源說明\n{source_str}\n\n{body_str.replace('\n','\n\n')}"

def process_all_years(root_path):
	for root, dirs, files in os.walk(root_path):
		year_match = re.search(r"(\d+)年-新聞稿$", os.path.basename(root))
		if not year_match:
			continue
		
		year = year_match.group(1)
		output_md_path = os.path.join(root_path, f"tax_news_臺北國稅局銷售稅組_{year}年_tmp.md")
		
		odt_files = []
		for sub_root, _, sub_files in os.walk(root):
			folder_name = os.path.basename(sub_root)
			month_match = re.search(r"\d{3}(\d{2})(部稿)?$", folder_name)
			
			if month_match:
				month_num = month_match.group(1)
				is_bu_gao = month_match.group(2)
				month_str = f"{year}年{month_num}月"
				if is_bu_gao:
					month_str += "（部稿）"
			else:
				month_str = f"{year}年度"
				
			for file in sub_files:
				if file.endswith(".odt"):
					full_path = os.path.join(sub_root, file)
					odt_files.append((folder_name, file, full_path, month_str))
		
		# 先按資料夾名稱排序，再按檔名排序
		odt_files.sort(key=lambda x: (x, x[1]))
		
		md_contents = [f"---\ndate_created: 2026-09-02T14:58:19+08:00\ndate_modified: {formatted_time}\ndraft: true\n---\n\n# {year}年度\n\n"]
		valid_count = 0
		for folder_name, file_name, file_path, month_str in odt_files:
			content = parse_odt_to_md(file_path, file_name, month_str)
			if content:
				md_contents.append(f"---\n\n{content}\n\n")
				valid_count += 1
		
		with open(fix_long_path(output_md_path), "w", encoding="utf-8") as f:
			f.writelines(md_contents)
		print(f"已完成：{output_md_path} （共處理 {valid_count} 件中文新聞稿）")

process_all_years(base_dir)
```

#### log

```
已完成：\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿\tax_news_臺北國稅局_111年.md （共處理 36 件中文新聞稿）
已完成：\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿\tax_news_臺北國稅局_112年.md （共處理 53 件中文新聞稿）
已完成：\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿\tax_news_臺北國稅局_113年.md （共處理 57 件中文新聞稿）
已完成：\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿\tax_news_臺北國稅局_114年.md （共處理 70 件中文新聞稿）
已完成：\\stsarw09\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿\tax_news_臺北國稅局_115年.md （共處理 61 件中文新聞稿）
```

### 各區國稅局官網新聞稿 Web Scraper

- **目標網站**：高雄、北區、中區、南區國稅局官網。
	> [!info]+ 其他地區國稅局官網新聞稿
	>> [!col2]
	>>
	>> ```text-nowrap
	>> 高雄國稅局
	>> 北區國稅局
	>> 中區國稅局
	>> 南區國稅局
	>> ```
	>>
	>> ```text-nowrap
	>> https://www.ntbk.gov.tw/multiplehtml/8edee6a2f90d4254a5e8d38c1db38137
	>> https://www.ntbna.gov.tw/multiplehtml/374fe8c4b18e48c691a6806ac02b9984
	>> https://www.ntbca.gov.tw/multiplehtml/3c844e426e9c4b5ebcaaa18694d7e230
	>> https://www.ntbsa.gov.tw/multiplehtml/5e0e49a811b74b50b5a6486d38374285
	>> ```
- **核心功能**：
	- 自動偵測網站總頁數。
	- 多執行緒（`ThreadPoolExecutor`）並行爬取，大幅提升效率。
	- 清理 HTML 雜訊、自動轉譯表格為 Markdown Table 格式。
	- 解析整理「提供單位」與「新聞稿聯絡人/撰稿人」資料。

#### 代碼

[ntbt](https://www.ntbt.gov.tw/multiplehtml/41ae3594197f4f69b47753ce08188516)新聞稿

需要 module: `requests`, `beautifulsoup4`
%%
```text-nowrap
https://www.ntbk.gov.tw/multiplehtml/8edee6a2f90d4254a5e8d38c1db38137
https://www.ntbna.gov.tw/multiplehtml/374fe8c4b18e48c691a6806ac02b9984
https://www.ntbca.gov.tw/multiplehtml/3c844e426e9c4b5ebcaaa18694d7e230
https://www.ntbsa.gov.tw/multiplehtml/5e0e49a811b74b50b5a6486d38374285
```
%%
```dataviewjs
const isWin = navigator.userAgent.includes("Win"); "".includes("Mac");
const user_name = process.env.USER || process.env.USERNAME;
const path = require('path');
const vault_path = this.app.vault.adapter.basePath;
const vault_name = isWin ? vault_path.split(app.vault.adapter.path.sep).filter(Boolean).pop() : (vault_path.includes('Cabinet') ? vault_path.split(app.vault.adapter.path.sep).filter(Boolean).pop() : dv.current().file.path.split("Cabinet")[1].slice(1).split('/')[0]);

let file_path = vault_path.includes("Cabinet") ? path.join(vault_path, 'Office', '研究發展', '新聞稿AI實戰指南', '_draft01.py') : path.join(vault_path, 'Cabinet', dv.current().file.path.split("Cabinet")[1].slice(1).split(app.vault.adapter.path.sep)[0], 'Office', '研究發展', '新聞稿AI實戰指南', '_draft01.py');
//let file_path = isWin ? `D:\\[${user_name}]\\Defaults\\Documents\\VaultsOfObsidian\\.git-stores\\${vault_name_of_repo}.git\\${vault_name_of_repo}_last_sync` : `${process.env.HOME}/ObsidianGitVaults/.git-stores/${vault_name_of_repo}.git/${vault_name_of_repo}_last_sync`;
dv.view("Extra/Scripts/open_file_with_app", {
	file_path: `${file_path}`
	//file_path: `${vault_path}/Cabinet/NTBT/Office/研究發展/新聞稿AI實戰指南/新聞稿彙整歷年稿/_draft01.py`
});
```

```python
import concurrent.futures
import re, time
from datetime import datetime
from functools import reduce
from bs4 import BeautifulSoup
import requests

start_time = time.time()
now = datetime.now().astimezone()
formatted_time = now.isoformat(timespec="seconds")
print(formatted_time)

targets = [
	{
		"name": "高雄國稅局",
		"base_url": "https://www.ntbk.gov.tw/multiplehtml/8edee6a2f90d4254a5e8d38c1db38137",
		"domain": "https://www.ntbk.gov.tw",
		"output_file": "tax_news_高雄國稅局.md",
	},
	{
		"name": "北區國稅局",
		"base_url": "https://www.ntbna.gov.tw/multiplehtml/374fe8c4b18e48c691a6806ac02b9984",
		"domain": "https://www.ntbna.gov.tw",
		"output_file": "tax_news_北區國稅局.md",
	},
	{
		"name": "中區國稅局",
		"base_url": "https://www.ntbca.gov.tw/multiplehtml/3c844e426e9c4b5ebcaaa18694d7e230",
		"domain": "https://www.ntbca.gov.tw",
		"output_file": "tax_news_中區國稅局.md",
	},
	{
		"name": "南區國稅局",
		"base_url": "https://www.ntbsa.gov.tw/multiplehtml/5e0e49a811b74b50b5a6486d38374285",
		"domain": "https://www.ntbsa.gov.tw",
		"output_file": "tax_news_南區國稅局.md",
	},
]


headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}


def clean_text(text):
	"""清理網頁文字中的多餘空白。"""
	text = text.replace("\xa0", " ")
	text = re.sub(r"[ \t]+", " ", text)
	text = re.sub(r" *\n *", "\n", text)
	text = re.sub(r"\n{3,}", "\n\n", text)
	return text.strip()


def get_page(url, retries=3, timeout=20):
	for attempt in range(1, retries + 1):
		try:
			res = requests.get(url, headers=headers, timeout=timeout)
			res.raise_for_status()
			res.encoding = "utf-8"
			return res

		except requests.RequestException as e:
			print(f"讀取失敗（第 {attempt}/{retries} 次）：{url}")

			if attempt == retries:
				raise


def normalize_phone(phone):
	"""整理電話中的多餘空白與格式。"""
	phone = phone.replace("\xa0", " ")
	phone = re.sub(r"\s+", " ", phone).strip()

	# 半形括號，例如：(07) 7256600
	phone = re.sub(r"\(\s*(\d+)\s*\)\s*", r"(\1)", phone)

	# 全形括號，例如：（03） 3396789
	phone = re.sub(r"（\s*(\d+)\s*）\s*", r"（\1）", phone)

	return phone


def extract_unit_from_text(text):
	"""
	精確抽取主辦單位名稱，防止將「股長、課長」的股/課誤認為單位名稱結尾。
	範例：
	"營所稅組 劉股長" -> "營所稅組"
	"政風室 陳股長" -> "政風室"
	"豐原分局 銷售稅課 李玉婷" -> "豐原分局 銷售稅課"
	"""
	text = text.strip()

	# 避免匹配到「股長/課長/組長/室主任」的頭銜，使用否定前瞻 (?!長|主任)
	unit_pattern = r"^([^\s\d]+?(?:分局|稽徵所|組|課|股|室)(?![長主任]))"
	
	# 如果是「豐原分局 銷售稅課 李玉婷」這類兩段式單位，優先匹配到第二個單位層級
	multi_unit_pattern = r"^([^\s\d]+?\s+[^\s\d]+?(?:分局|稽徵所|組|課|股|室)(?![長主任]))"

	match_multi = re.search(multi_unit_pattern, text)
	if match_multi:
		return match_multi.group(1).strip()

	match_single = re.search(unit_pattern, text)
	if match_single:
		return match_single.group(1).strip()

	return "未標示"


def fetch_news_detail(item_info):
	"""抓取單篇新聞詳細內容。"""
	href = item_info["href"]
	title = item_info["title"]
	original_index = item_info["index"]

	try:
		detail_res = get_page(href)
		detail_res.raise_for_status()
		detail_res.encoding = "utf-8"

		detail_soup = BeautifulSoup(detail_res.text, "html.parser")
		content_box = detail_soup.select_one("article")

		if not content_box:
			return None

		# --------------------------------------------------
		# 1. 移除不需要的 HTML 標籤
		# --------------------------------------------------
		for tag in content_box.find_all("font"):
			tag.unwrap()
		for tag in content_box.find_all("span"):
			tag.unwrap()

		# --------------------------------------------------
		# 2. 找出並移除頁尾聯絡資訊與單位
		# --------------------------------------------------
		contact_lines = []
		unit = "未標示"

		paragraphs = content_box.find_all("p")

		for p in paragraphs:
			p_text = p.get_text(separator=" ", strip=True)
			p_text = clean_text(p_text)

			# ----------------------------------------------
			# 高雄國稅局：
			# 提供單位：XXX
			# 聯絡人：XXX 聯絡電話：XXX
			# ----------------------------------------------
			if re.search(r"提供單位[：:]", p_text):
				match = re.search(r"提供單位[：:]\s*(.*?)(?=聯絡人|撰稿人|$)", p_text)
				if match:
					unit = match.group(1).strip()
				p.decompose()
				continue

			if re.search(r"^(聯絡人|撰稿人)[：:]", p_text):
				contact_match = re.search(r"聯絡人[：:]\s*(.*?)\s*聯絡電話[：:]\s*(.*)$", p_text)
				writer_match = re.search(r"撰稿人[：:]\s*(.*?)\s*聯絡電話[：:]\s*(.*)$", p_text)

				if contact_match:
					name = clean_text(contact_match.group(1))
					phone = normalize_phone(contact_match.group(2))
					contact_lines.append(f"聯絡人：{name} 聯絡電話：{phone}")
					p.decompose()
					continue

				if writer_match:
					name = clean_text(writer_match.group(1))
					phone = normalize_phone(writer_match.group(2))
					contact_lines.append(f"撰稿人：{name} 聯絡電話：{phone}")
					p.decompose()
					continue

			# ----------------------------------------------
			# 北區／中區／南區：
			# 新聞稿聯絡人：XXX...
			# ----------------------------------------------
			if "新聞稿聯絡人：" in p_text or "新聞稿聯絡人:" in p_text:
				lines = [clean_text(line) for line in p.stripped_strings if line]

				contact_name = ""
				phone = ""

				for line in lines:
					line = re.sub(r"^新聞稿聯絡人[：:]", "", line).strip()

					if line.startswith("電話：") or line.startswith("電話:"):
						phone = re.sub(r"^電話[：:]", "", line).strip()
					elif line.startswith("聯絡電話：") or line.startswith("聯絡電話:"):
						phone = re.sub(r"^聯絡電話[：:]", "", line).strip()
					elif line:
						if not contact_name:
							contact_name = line
						elif not phone:
							match = re.search(
								r"(.+?)\s*((?:\(?\d{2,4}\)?)[\d\-\s]+(?:轉|分機)\s*\d+)$",
								line
							)
							if match:
								contact_name = (contact_name + " " + match.group(1).strip()).strip()
								phone = match.group(2).strip()
							else:
								contact_name = (contact_name + " " + line).strip()

				# 南區部分格式可能完全在同一行
				if not phone:
					full_text = re.sub(r"^.*?新聞稿聯絡人[：:]", "", p_text).strip()

					phone_match = re.search(
						r"(?:電話|聯絡電話)?[：:]?\s*((?:\(?\d{2,4}\)?)[\d\-\s]+(?:轉|分機)\s*\d+)",
						full_text
					)
					if phone_match:
						phone = phone_match.group(1)
						contact_name = full_text.replace(phone_match.group(0), "").strip()
					elif not contact_name:
						contact_name = full_text

				# 從原始文字萃取單位（不裁剪 contact_name）
				if contact_name:
					parsed_unit = extract_unit_from_text(contact_name)
					if parsed_unit != "未標示":
						unit = parsed_unit

					if phone:
						contact_lines.append(f"新聞稿聯絡人：{contact_name} 電話：{normalize_phone(phone)}")
					else:
						contact_lines.append(f"新聞稿聯絡人：{contact_name}")

				p.decompose()
				continue

			# 南區獨立行電話補抓
			if re.search(r"^(聯絡電話|電話)[：:]", p_text):
				phone_val = re.sub(r"^(聯絡電話|電話)[：:]", "", p_text).strip()
				if contact_lines and "電話" not in contact_lines[-1]:
					contact_lines[-1] += f" 電話：{normalize_phone(phone_val)}"
				else:
					contact_lines.append(f"聯絡電話：{normalize_phone(phone_val)}")
				p.decompose()
				continue

		# --------------------------------------------------
		# 3. 將表格轉成 Markdown
		# --------------------------------------------------
		table_placeholders = []
		for index, table in enumerate(content_box.find_all("table")):
			rows = table.find_all("tr")
			md_table_lines = []

			for i, row in enumerate(rows):
				cols = row.find_all(["th", "td"])
				col_text = [clean_text(c.get_text(separator=" ", strip=True)) for c in cols]

				if not col_text:
					continue

				md_table_lines.append("| " + " | ".join(col_text) + " |")

				if i == 0:
					md_table_lines.append("| " + " | ".join(["---"] * len(cols)) + " |")

			md_table = "\n" + "\n".join(md_table_lines) + "\n"
			placeholder = f"___TABLE_{index}___"

			table.replace_with(detail_soup.new_string(placeholder))
			table_placeholders.append((placeholder, md_table))

		# --------------------------------------------------
		# 4. 逐個 <p> 處理段落
		# --------------------------------------------------
		paragraphs = []
		for p in content_box.find_all("p"):
			for br in p.find_all("br"):
				br.replace_with("___BR___")

			text = p.get_text(separator=" ", strip=True)
			text = text.replace("\xa0", " ")
			text = re.sub(r"\s+", " ", text).strip()
			text = text.replace("___BR___", "\n")
			text = re.sub(r" *\n *", "\n", text)
			text = text.replace(" ", "")

			if text:
				paragraphs.append(text)

		raw_content = "\n\n".join(paragraphs)
		raw_content = raw_content.replace("*", r"\*")

		# --------------------------------------------------
		# 6. 還原 Markdown 表格
		# --------------------------------------------------
		for placeholder, md_table in table_placeholders:
			raw_content = raw_content.replace(placeholder, md_table)

		raw_content = re.sub(r"\n{3,}", "\n\n", raw_content).strip()

		# --------------------------------------------------
		# 7. 抓日期
		# --------------------------------------------------
		info_div = detail_soup.select_one("div.info")
		info_text = info_div.get_text(separator=" ", strip=True) if info_div else ""

		date_match = re.search(r"發布日期[：:]\s*([0-9\-\./]+)", info_text)
		if not date_match:
			date_match = re.search(r"更新日期[：:]\s*([0-9\-\./]+)", info_text)

		update_date = date_match.group(1).strip() if date_match else "未標示"

		# --------------------------------------------------
		# 8. 回傳結果
		# --------------------------------------------------
		return {
			"序號": original_index,
			"標題": title,
			"日期": update_date,
			"單位": unit,
			"網址": href,
			"內文": raw_content,
			"聯絡資訊": contact_lines,
		}

	except Exception as e:
		print(f"無法讀取內文 {href}: {e}")
		return None


# ======================================================
# 主程式
# ======================================================

for target in targets:
	print(f"正在檢查：{target['name']} 的總頁數...")

	# --------------------------------------------------
	# 1. 取得總頁數
	# --------------------------------------------------
	res = get_page(target["base_url"])
	res.raise_for_status()
	res.encoding = "utf-8"

	soup = BeautifulSoup(res.text, "html.parser")

	max_page = 1
	page_text_elem = soup.find(string=re.compile(r"總共\s*\d+\s*頁"))

	if page_text_elem:
		match = re.search(r"總共\s*(\d+)\s*頁", page_text_elem)
		if match:
			max_page = int(match.group(1))

	print(f"-> 自動偵測到 {target['name']} 共有 {max_page} 頁。正在進行並行抓取...")

	# --------------------------------------------------
	# 2. 蒐集所有新聞連結
	# --------------------------------------------------
	all_tasks = []
	seen_urls = set()

	for page in range(1, max_page + 1):
		target_url = f"{target['base_url']}?page={page}"

		res = get_page(target_url)
		res.raise_for_status()
		res.encoding = "utf-8"

		soup = BeautifulSoup(res.text, "html.parser")
		links = soup.select("a[href*='cntId']")

		if not links:
			break

		for a in links:
			href = a.get("href")
			title = a.get_text(strip=True)

			if not href or not title or len(title) < 5:
				continue

			if not href.startswith("http"):
				href = target["domain"] + href

			if href in seen_urls:
				continue

			seen_urls.add(href)

			all_tasks.append({
				"domain": target["domain"],
				"href": href,
				"title": title,
				"index": len(all_tasks),
			})

	# --------------------------------------------------
	# 3. 多執行緒抓取新聞內文
	# --------------------------------------------------
	all_news = []

	with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
		futures = [executor.submit(fetch_news_detail, task) for task in all_tasks]

		for idx, future in enumerate(concurrent.futures.as_completed(futures), 1):
			result = future.result()
			if result:
				all_news.append(result)
				print(f"{target['name']} [{idx}/{len(all_tasks)}] {result['標題']}")

	# --------------------------------------------------
	# 4. 恢復網站原本的新聞順序
	# --------------------------------------------------
	all_news.sort(key=lambda x: x["序號"])

	# --------------------------------------------------
	# 5. 輸出 Markdown
	# --------------------------------------------------

	now = datetime.now().astimezone()
	modified_time = now.isoformat(timespec="seconds")
	markdown_lines = [
		f"---\ndate_created: {formatted_time}\ndate_modified: {modified_time}\ndraft: true\n---\n\n# {target['name']}\n\n"
	]

	for item in all_news:
		contact_text = "\n".join(item["聯絡資訊"])

		md_block = f"""### {item['標題']}

- 發布日期：{item['日期']}
- 主辦單位：{item['單位']}

{item['內文']}"""

		if contact_text:
			md_block += f"""

{contact_text}"""

		md_block += """

---"""
		markdown_lines.append(md_block)

	with open(target["output_file"], "w", encoding="utf-8-sig") as f:
		f.write("\n\n".join(markdown_lines))

	print(f"{target['name']} 爬取完畢！共取得 {len(all_news)} 筆新聞稿，已儲存為 {target['output_file']}。\n")

print('--- 總共耗時 %d:%02d:%02d.%03d ms ---\n' % (reduce(lambda ll, b: divmod(ll[0], b) + ll[1:], [((time.time() - start_time) * 1000,), 1000, 60, 60])))
```
^web-scraper

#### log

````log
2026-10-28T14:46:05+08:00
正在檢查：高雄國稅局 的總頁數...
-> 自動偵測到 高雄國稅局 共有 22 頁。正在進行並行抓取...
高雄國稅局 [1/215] 牙科醫療院所自費醫療收入應依法覈實申報執行業務所得
高雄國稅局 [2/215] 營業人兼營銷售免稅貨物或勞務，可評估有利選擇申請放棄適用免稅
高雄國稅局 [3/215] AI稅務系統發揮效益！國稅局運用AI稅務應用系統查獲企業漏報三角貿易收入
高雄國稅局 [4/215] 高雄國稅局全國首創「AI稅務知識包」　打造專屬稅務助理，智慧服務再升級
高雄國稅局 [5/215] 「E起闖關趣，學習菸酒稅」網路闖關活動開跑，邀您一起認識菸酒稅捐、拒買私劣菸!
高雄國稅局 [6/215] 告別手寫發票!善用「電子發票整合服務平台」開立B2B電子發票，省時便利又環保。
高雄國稅局 [7/215] 個人交易持有期間5年以下之房屋土地，符合財政部公告之情形，可適用20%稅率計算應納稅額
高雄國稅局 [8/215] 結合AI新趨勢！高雄國稅局舉辦「AI開拍！30秒稅出新視界！」短影音挑戰賽，總獎金豐富等你來挑戰！
高雄國稅局 [9/215] 債權無償轉讓給子女，應申報贈與稅
高雄國稅局 [10/215] 營利事業要注意！違規罰鍰不得列報費用或損失
高雄國稅局 [11/215] 營利事業依經銷契約取得或支付之獎勵金，應按進貨或銷貨折讓處理
高雄國稅局 [12/215] 把握調查基準日前補報補繳綜合所得稅所漏稅款的免罰機會
高雄國稅局 [13/215] 指定身故受益人之保險理賠課稅規定
高雄國稅局 [14/215] 國稅局查帳會以正式函文通知，不會寄發電子郵件！
高雄國稅局 [15/215] 受第29號（薔琵）颱風影響造成災害損失，別忘了依災害減免三步驟向國稅局申請稅捐減免!
高雄國稅局 [16/215] 中秋佳節廉潔過節，高雄國稅局提醒民眾善用線上服務最安心
高雄國稅局 [17/215] 兼營投資業務營業人全年度國內外股利收入應依規定彙總併入最後一期營業稅申報及辦理年度調整
高雄國稅局 [18/215] 機關團體應注意結餘款使用計畫之執行進度與期限
高雄國稅局 [19/215] 個人違反專任委託契約所支付之違約金，非屬交易房屋、土地之必要費用
高雄國稅局 [20/215] 外僑報稅請小心!國稅局盤點3大常見錯誤
高雄國稅局 [21/215] 列報自用住宅購屋借款利息扣除額適用要件
高雄國稅局 [22/215] 外國營利事業取得營業利潤免稅核准函，仍應持續滾動檢視是否符合免稅要件
高雄國稅局 [23/215] 買賣未上市公司股票，小心別漏繳了證券交易稅!
高雄國稅局 [24/215] 網紅取自平臺分潤收入，符合規定者應依法辦理稅籍登記並報繳營業稅
高雄國稅局 [25/215] 換屋族購買預售屋應留意成屋登記日，避免因「買新賣新」無法適用房地合一稅重購退(抵)稅優惠
高雄國稅局 [26/215] 營利事業所得稅暫繳申報多元繳稅管道，任您選。
高雄國稅局 [27/215] 子女結婚限定的甜蜜福利「婚嫁贈與100萬元」不計入贈與總額
高雄國稅局 [28/215] 死亡留下的公共設施保留地也要申報遺產稅？
高雄國稅局 [29/215] 個人捐贈財產予宗教團體，不計入贈與總額課稅之要件
高雄國稅局 [30/215] 高雄國稅局辦理「兼辦政風人員及廉政志工講習會」，凝聚廉潔共識，強化機關廉潔風氣
高雄國稅局 [31/215] 您家廚房就是甜點店嗎?利用自宅銷售貨物，別忘了辦理稅籍登記喔!
高雄國稅局 [32/215] 出售國內未上市(櫃)股票與國外有價證券課稅規定不同，請民眾留意避免受罰
高雄國稅局 [33/215] 營利事業委外記帳及稅務申報，應注意委任合法代理人，保障權益
高雄國稅局 [34/215] 個人出售不動產隨屋附贈之家電用品，不得列為交易所得之減除項目！
高雄國稅局 [35/215] 藥商銷售藥品開立電子發票，買受人身分不同，存證時限不同。
高雄國稅局 [36/215] 網紅課稅輔導期屆滿，「AI稅務知識包」助您解析網紅新興交易新制規定
高雄國稅局 [37/215] 雲端發票e手掌握，兌獎APP全新登場，發票管理更智慧、兌獎更便利
高雄國稅局 [38/215] 「嗶」一下收款更便利！適用租稅優惠之實體店家，請踴躍鼓勵消費者使用行動支付
高雄國稅局 [39/215] 個人交易預售屋不符自住要件，不適用重購退稅優惠
高雄國稅局 [40/215] 營利事業興建廠房支付之借款利息是否可列為當期費用
高雄國稅局 [41/215] 個人房地合一稅經核准適用自住房地重購優惠者，請留意「5年列管限制」，以免前功盡棄
高雄國稅局 [42/215] 死亡前2年內變更保單要保人為特定親屬，應併計遺產課稅
高雄國稅局 [43/215] 企業實質投資享租稅優惠，留意付款時點規定
高雄國稅局 [44/215] 受西南風及低壓帶持續豪雨影響造成災害損失，別忘了依災害減免三步驟向國稅局申請稅捐減免!
高雄國稅局 [45/215] 重購自住房地後將新房地出租者，不得適用重購自住房地所得稅額扣抵或退還規定
高雄國稅局 [46/215] 115年度繳納暫繳稅額免辦理申報之業者，電子申報系統已優化線上繳稅功能，省時又便利！
高雄國稅局 [47/215] 公益捐款有上限！執行業務者申報捐贈，10%限額要注意
高雄國稅局 [48/215] 國人贈與境外公司股權，仍須申報贈與稅!
高雄國稅局 [49/215] 115年度營利事業暫繳申報期將至，採一般暫繳方式者，無須將上年度分開計稅之房地合一稅納入計算
高雄國稅局 [50/215] 死亡前2年內贈與之土地，於被繼承人死亡前受贈人已移轉所有權者，應如何計算申報其遺產價值
高雄國稅局 [51/215] 贈與未上市公司股權，需檢附稽徵機關證明書，營利事業始得為移轉登記。
高雄國稅局 [52/215] 雇主依法給付勞工損害賠償之「職業災害補償金」免納所得稅！
高雄國稅局 [53/215] 營業人停業中發生進貨退出或折讓，仍應於發生當期申報營業稅扣減進項稅額
高雄國稅局 [54/215] 營利事業列報職工福利支出應留意限額規定
高雄國稅局 [55/215] 營利事業閒置資產之折舊提列
高雄國稅局 [56/215] 營利事業停業中有條件免辦理暫繳申報
高雄國稅局 [57/215] 歡迎線上報名參加「115年度營利事業所得稅暫繳及決清算申報講習會」
高雄國稅局 [58/215] 海外所得應依法核實申報，申報期後可善用綜合所得稅各類所得資料清單檢視申報內容
高雄國稅局 [59/215] 114年度綜合所得稅第1批退稅：115年7月31日入帳！
高雄國稅局 [60/215] 財政部高雄國稅局以「透明智慧諮詢．稅務廉能治理」角逐第4屆透明晶質獎
高雄國稅局 [61/215] 「飛躍雲端 雄鷹展翅一起看棒球」租稅宣導活動即將開跑，熱情邀您將雲端發票變門票，加碼抽好禮！
高雄國稅局 [62/215] 個人出售未作農業使用之農地，土地增值稅可否列為移轉費用減除？
高雄國稅局 [63/215] 115年度高雄市國稅盃籃球錦標賽將火熱登場
高雄國稅局 [64/215] 出售繼承或受遺贈房地，得併計各次被繼承人或遺贈人持有期間，稅率有機會降很大！
高雄國稅局 [65/215] 小規模營業人給付薪資、租金等所得，仍應依法辦理扣繳及申報
高雄國稅局 [66/215] 實體店面試營運也要辦理稅籍登記
高雄國稅局 [67/215] 財政部高雄國稅局公告所轄重大欠稅人名單
高雄國稅局 [68/215] 小規模營業人汰舊換新營業用資產，稅務好康報你知!
高雄國稅局 [69/215] 執行業務者代出租人支付各項稅捐及費用視同支付租金，應依規定申報扣(免)繳憑單
高雄國稅局 [70/215] 收到電子郵件通知綜合所得稅未申報，甘真ㄟ?
高雄國稅局 [71/215] 營業人跨區舉辦臨時展售會免再辦稅籍登記
高雄國稅局 [72/215] 受0625颱風外圍環流及西南風豪雨造成災害損失，別忘了依災害減免三步驟向國稅局申請稅捐減免!
高雄國稅局 [73/215] 端午佳節採購禮品贈送客戶或員工，進項稅額不得申報扣抵
高雄國稅局 [74/215] 端午佳節粽香飄千里，高雄國稅局呼籲洽公不送禮
高雄國稅局 [75/215] 醫療院所銷售保養品等商品，應依規定辦理稅籍登記並開立統一發票、報繳營業稅
高雄國稅局 [76/215] 父母幫子女存股，別忘了贈與稅申報!
高雄國稅局 [77/215] 提醒您！如受有災害損失，別忘了向國稅局申請稅捐減免!
高雄國稅局 [78/215] 炎炎夏日換家電，別讓退稅美意被詐騙集團破壞了！
高雄國稅局 [79/215] 民眾核對報稅資料如發現有錯漏，請儘速自動補報繳
高雄國稅局 [80/215] 營業人向加盟店收取加盟金應開立統一發票報繳營業稅
高雄國稅局 [81/215] 統一發票兌獎不需要輸入信用卡資料驗證身分，收到可疑中獎通知郵件，千萬別點擊假連結!!
高雄國稅局 [82/215] 高雄國稅局攜手稅務代理業者　推動營業人開立B2B電子發票獎勵活動開跑
高雄國稅局 [83/215] 出售繼承或受遺贈取得之自地自建房屋、合建分屋、都更及危老重建房屋，房屋持有期間改以併計被繼承人或遺贈人土地持有期間為準！
高雄國稅局 [84/215] 營利事業短漏報所得額，雖無應納稅額，仍應處罰
高雄國稅局 [85/215] 營業人停業後欲恢復營業，應申請復業，以免受罰
高雄國稅局 [86/215] 營利事業未能如期提示受控外國企業（CFC）財務報表者，請記得依限申請延期提示
高雄國稅局 [87/215] 執行業務及其他所得者請多留意常見錯誤，報稅不卡關
高雄國稅局 [88/215] 營業人誤將免稅發票開立為應稅發票之處理方式
高雄國稅局 [89/215] 營業人贈送股東紀念品所取得之進項憑證，不得扣抵銷項稅額
高雄國稅局 [90/215] 營利事業逾期送交會計師查核簽證報告書，視為普通申報案件
高雄國稅局 [91/215] 免用統一發票之小規模營業人年度中變更為使用統一發票者，請記得辦理營利事業所得稅結算申報
高雄國稅局 [92/215] 申請無違章欠稅證明免臨櫃，線上申辦省時又便利
高雄國稅局 [93/215] 醫療院所應誠實申報自費醫療收入，以免遭補稅處罰
高雄國稅局 [94/215] 財政部電子發票整合服務平台協助營業人計算開立電子發票之減碳效益
高雄國稅局 [95/215] 死亡前2年內贈與弟媳婦20萬元及朋友10萬元，視為遺產嗎？
高雄國稅局 [96/215] 【防詐警戒】假中獎真盜刷！當心偽冒「電子發票平台」信件，認明.gov.tw 守荷包！
高雄國稅局 [97/215] 新婚甜蜜，報稅更要精明，善用申報選擇，才能聰明節稅！
高雄國稅局 [98/215] 營業人銷售黃金與金飾應依規定開立統一發票
高雄國稅局 [99/215] 所得稅結算申報e化繳稅，真方便!
高雄國稅局 [100/215] 105年1月1日起出售共有房地，所有權人取得時間不同，交易所得課稅方式亦有所不同
高雄國稅局 [101/215] 被繼承人死亡後其遺產所生之孳息課稅及扣繳憑單開立方式
高雄國稅局 [102/215] 臨櫃先預約，報稅省時間
高雄國稅局 [103/215] 114年度營所稅申報將於115年5月展開，國稅局提醒營利事業記得檢視各項收入是否均已列入申報
高雄國稅局 [104/215] 納稅義務人列報房屋租金支出特別扣除額，視為「非自有房屋」之認定
高雄國稅局 [105/215] 報稅季將至！114年度綜合所得稅結算申報服務時程一次看！
高雄國稅局 [106/215] 申報114年度綜合所得稅時，請注意家戶成員關係及年齡！
高雄國稅局 [107/215] 高雄國稅局推出「AI稅務知識包」虛擬助教線上 24小時隨時問
高雄國稅局 [108/215] 五一勞動節國稅局不提供臨櫃報稅服務，民眾可改用網路申報或手機報稅，輕鬆又便利，報稅無時差！
高雄國稅局 [109/215] 多元繳稅管道齊發，e化繳稅最便利
高雄國稅局 [110/215] 報稅季好康來了！5大減稅利多一次看，輕鬆省荷包
高雄國稅局 [111/215] 114年度營利事業所得稅結算申報書修訂重點
高雄國稅局 [112/215] 無障礙申報網頁，打造友善的報稅環境。
高雄國稅局 [113/215] 綜合所得稅醫藥及生育費放寬認定非健保特約之人工生殖醫療費用列舉扣除額規定，減輕民眾生育負擔。
高雄國稅局 [114/215] 高雄國稅局提供在地報稅服務，旗津居民輕鬆報！
高雄國稅局 [115/215] 已成年子女就讀國外語言學校不得列報免稅額及教育學費特別扣除額
高雄國稅局 [116/215] 海外財產交易損失扣除重點，申報前停看聽！
高雄國稅局 [117/215] 年滿80歲以上長者聘僱外籍看護，須為身心失能者方能列報長期照顧特別扣除額！
高雄國稅局 [118/215] 直撥退稅「點」就到，省時、便捷、零時差
高雄國稅局 [119/215] 中小企業發展條例員工加薪薪資費用加成減除申報明細表可採媒體申報，報稅更便捷！
高雄國稅局 [120/215] 今(115)年5月報稅別跑錯！財政部高雄國稅局三民分局已搬新家，全面進駐民族一路505號新址
高雄國稅局 [121/215] 營利事業暫停營業，仍應依規定辦理結算申報，以免遭加徵滯、怠報金
高雄國稅局 [122/215] 114年度綜合所得稅所得及扣除額查調於115年4月28日開始，申報首日適逢勞動節及週休二日，請洽公民眾留意。
高雄國稅局 [123/215] 個人綜合所得稅誤報死亡親屬免稅額，除補稅外恐遭處罰！
高雄國稅局 [124/215] 網路銷售新時代，如當月銷售貨物或勞務達營業稅起徵點，稅籍登記不能忘!
高雄國稅局 [125/215] 網路代購業者應注意開立發票之規定
高雄國稅局 [126/215] 機關團體辦理114年度所得稅結算申報採用網路上傳附件，省時又便利。
高雄國稅局 [127/215] 「114年度營利事業所得稅結算申報講習會」開課囉，歡迎線上報名參加！
高雄國稅局 [128/215] 勞工退休金與勞保死亡給付是否課徵遺產稅，規定大不同！
高雄國稅局 [129/215] 以外幣計酬如何計算扣繳稅款
高雄國稅局 [130/215] 115年起基本工資調升！「非居住者」薪資扣繳基準同步調整
高雄國稅局 [131/215] 【報稅重要提醒】115年起便利商店KIOSK停止「健保卡」認證服務
高雄國稅局 [132/215] 機關團體銷售貨物或勞務，亦應課徵營業稅！
高雄國稅局 [133/215] 愛心助學做公益，還能節稅省荷包
高雄國稅局 [134/215] 綜合所得稅如有列報非現金捐贈扣除額，別忘了將該扣除金額計入個人基本所得額。
高雄國稅局 [135/215] 建設公司向合建分售地主買回興建房屋坐落基地再併同房屋出售之房地合一2.0計稅方式
高雄國稅局 [136/215] 承租信託財產應注意！扣繳義務人應以「受託人」為所得人依法扣繳及開立憑單
高雄國稅局 [137/215] 以未分配盈餘實質投資申請租稅優惠應注意更正申請期限
高雄國稅局 [138/215] 給付非居住者所得扣繳申報規定大不同，正確新制報你知！
高雄國稅局 [139/215] 營業人採用「先買後付」（BNPL）之支付方式銷售貨物或勞務，仍應依規定報繳營業稅
高雄國稅局 [140/215] 列報綜合所得稅醫藥費及生育費扣除額，受有保險給付部分，記得要減除！
高雄國稅局 [141/215] 網紅報稅指南看這裡！財政部發布作業規範，三大重點一次看。
高雄國稅局 [142/215] 取得房地原因不同，申報房地合一稅可減除成本大不同!
高雄國稅局 [143/215] 出售繼承取得不動產可能涉及房地合一稅，請注意被繼承人取得日！
高雄國稅局 [144/215] 高雄國稅局舉辧租稅法規講習，歡迎線上報名參加！
高雄國稅局 [145/215] 113年度綜合所得稅退稅憑單即將到期，請儘速兌領！
高雄國稅局 [146/215] 個人間借款所收取利息應自行申報當年度個人綜合所得稅
高雄國稅局 [147/215] 關係企業間資金往來之利息列報應注意事項
高雄國稅局 [148/215] 營利事業給付死亡員工退(離)職金、慰勞金、撫卹金、喪葬費及所領取勞工保險給付、勞工退休專戶之退休金，應否申報遺產稅?
高雄國稅局 [149/215] 檢舉逃漏稅獎金最高480萬元，5種身分領不到。
高雄國稅局 [150/215] 營業人註銷登記應於規定期限辦理營業稅申報，避免受罰。
高雄國稅局 [151/215] 海外投資AI理財，請主動查明申報繳稅喔!
高雄國稅局 [152/215] 發票用罄別喊卡！先用次期發票開立再報備，避免漏開受罰
高雄國稅局 [153/215] 菸酒產製及申報留意常見違章態樣
高雄國稅局 [154/215] 財政部高雄國稅局岡山稽徵所將於3月12日植樹節假岡山區公所舉辦租稅宣導活動
高雄國稅局 [155/215] 民眾贈與房地差一步，稅金竟多12.9萬元！國稅局：關鍵在於「誰」繳稅
高雄國稅局 [156/215] 發票兌獎拼圖的最後一塊　跨境電商載具歸戶你完成了嗎
高雄國稅局 [157/215] 買新屋賣舊屋，購屋當下舊屋須符合「自住房地」要件才適用房地合一重購扣抵稅額
高雄國稅局 [158/215] 拋棄繼承父親遺產，仍可代位繼承申請查調祖父之遺產
高雄國稅局 [159/215] 獨資商號負責人死亡，繼承人繼承獨資商號之貨物及固定資產免課徵營業稅。
高雄國稅局 [160/215] 申報綜合所得稅扶養子女的特別扣除額報你知！
高雄國稅局 [161/215] 114年度綜合所得稅稅額試算服務申請事項自115年2月15日起至115年3月16日止
高雄國稅局 [162/215] 114年度個人所得及扣除額資料欲申請分開或選擇性提供者，申請期間自115年2月15日起至同年3月16日止
高雄國稅局 [163/215] 非健保特約醫院人工生殖技術療程費用，如經核准補助得列舉扣除
高雄國稅局 [164/215] 開立電子發票之營業人，應下載當期電子發票媒體檔據實申報，以免受罰！
高雄國稅局 [165/215] 人工生殖機構應依法如實申報執行業務所得
高雄國稅局 [166/215] 從事進出口貿易營業人申報營業稅適用零稅率之注意事項
高雄國稅局 [167/215] 變更保單要保人，注意申報贈與稅
高雄國稅局 [168/215] 馬到成功廉先行，清廉辦稅迎新春
高雄國稅局 [169/215] 扣繳繳款書遺失免驚慌！國稅局教您兩招快速查詢繳納紀錄，採線上查詢免跑櫃檯更省時
高雄國稅局 [170/215] 員工年終獎金請列入實際發放年度之各類所得扣繳暨免扣繳憑單申報
高雄國稅局 [171/215] 年終獎金，領多少要先扣稅 ?
高雄國稅局 [172/215] 113年度綜所稅核定補稅開徵，多元繳稅管道，逾期30日內也能線上繳納
高雄國稅局 [173/215] 115年1月起扣繳申報期已開跑，提醒「扣繳義務人」應正確填列喔!
高雄國稅局 [174/215] 113年度綜合所得稅第3批退稅，115年1月20日入帳！
高雄國稅局 [175/215] 消費者在跨境電商平台購買電子勞務所取得之雲端發票，完成載具歸戶步驟真簡單，別再與財神爺擦身而過！
高雄國稅局 [176/215] 營業人應主動開立統一發票交付買受人
高雄國稅局 [177/215] 114年度各類所得扣(免)繳憑單申報期限至115年2月2日止，申報軟體優化功能，讓網路申報省時又便利！
高雄國稅局 [178/215] 營業人銷售貨物或勞務，如有加收運費等費用，應依規定開立統一發票並報繳營業稅
高雄國稅局 [179/215] 申報房地合一稅，備妥合法裝修憑證以確保權益
高雄國稅局 [180/215] 給付員工退休金，如何申報退職所得？
高雄國稅局 [181/215] 民眾對行政救濟加計利息不服，可依法提起救濟
高雄國稅局 [182/215] 查獲動物醫院漏報自費收入，籲業者依法如實申報執行業務所得
高雄國稅局 [183/215] 使用統一發票營業人申請停業，當期如無銷售額，仍須依規定申報營業稅
高雄國稅局 [184/215] 個人出售「自地自建」之土地、房屋，符合一定條件才能申報房地合一稅適用稅率20%
高雄國稅局 [185/215] 財政部高雄國稅局與勞動部職業安全衛生署合署興建所屬單位辦公廳舍「中央機關河堤辦公大樓」於114年12月22日上午10點隆重舉辦落成啟用典禮
高雄國稅局 [186/215] 公司年終尾牙以購入商品酬勞員工，應注意開立統一發票之相關規定
高雄國稅局 [187/215] 個人交易105年1月1日以後取得之自住房屋、土地，符合相關規定者，可適用400萬元免稅額租稅優惠
高雄國稅局 [188/215] 照顧身心失能者列報扣除額適用條件及應檢附證明文件
高雄國稅局 [189/215] 金融遺產查詢免緊張，先收到「當事人綜合信用報告」是正常！
高雄國稅局 [190/215] 114年度各類所得憑單申報於115年1月開跑，請多使用網路申報，省時又省力!
高雄國稅局 [191/215] 「駿馬奔騰迎新春」水果月曆兌換活動開始囉！
高雄國稅局 [192/215] 非營利機構銷售貨物或勞務，仍應注意報繳營業稅。
高雄國稅局 [193/215] 高雄國稅局舉辦績優營業人及雲端發票競賽優勝表揚典禮誠實開立發票企業獲肯定
高雄國稅局 [194/215] 執行業務者舉辦員工旅遊活動，應如何列帳及是否申報員工薪資所得？
高雄國稅局 [195/215] 利用境外無實質營運CFC隱匿在臺員工薪資所得，小心受罰！
高雄國稅局 [196/215] 從效率到精準，高雄國稅局邁向AI智慧稅務新紀元
高雄國稅局 [197/215] 父母無償為子女清償房貸 小心被課徵贈與稅
高雄國稅局 [198/215] 個人出售參與市地重劃後獲分配土地，應注意相關取得日之認定基準，以免漏未申報房地合一稅
高雄國稅局 [199/215] 網紅交易課稅新制上路，輔導期間至115年6月30日止，請網紅及平臺依規定辦理稅籍登記及報繳營業稅
高雄國稅局 [200/215] 汽機車減徵退還貨物稅，購新車也適用，同時汰舊最多可退還10萬元
高雄國稅局 [201/215] 營業人於停業期間註銷稅籍登記之營業稅申報規定
高雄國稅局 [202/215] 擴大產業創新條例第10條之1抵減適用範圍，鼓勵產業智慧轉型
高雄國稅局 [203/215] 小規模營業人給付各類所得時應辦理扣免繳憑單申報
高雄國稅局 [204/215] 高雄國稅局舉辦「114年度各類所得資料扣繳申報講習會」，歡迎 線上報名參加！
高雄國稅局 [205/215] 營利事業繳納各項罰鍰不得列報費用或損失
高雄國稅局 [206/215] 變更保險單要保人為他人，除要申報贈與稅，注意如有特定情形也要申報遺產稅。
高雄國稅局 [207/215] 營利事業商品報廢損失之認列規定
高雄國稅局 [208/215] 個人適用房地合一重購退（抵）稅，無論重購價額是否高於出售價額，均可按比率申請退還（扣抵）應納稅額
高雄國稅局 [209/215] 財政部高雄國稅局三民分局114年11月17日遷移新址辦公
高雄國稅局 [210/215] 「有愛無礙，幸福同在」租稅宣導活動，歡迎民眾踴躍參加
高雄國稅局 [211/215] 持憑已確定之民事判決及確定證明，可臨櫃查調債務人之財產及所得
高雄國稅局 [212/215] 停業前之營業期間不論有無銷售額，應按時申報營業稅
高雄國稅局 [213/215] 營業人應依實際交易流程開立統一發票，切勿跳開發票，以免受罰。
高雄國稅局 [214/215] 財政部高雄國稅局「DJ稅稅唸之誠信廉盟露天派對」傳達誠信青年你最IN價值
高雄國稅局 [215/215] 營利事業受控外國企業(CFC)制度首次申報應注意事項！
高雄國稅局 爬取完畢！共取得 215 筆新聞稿，已儲存為 tax_news_高雄國稅局.md。

正在檢查：北區國稅局 的總頁數...
-> 自動偵測到 北區國稅局 共有 19 頁。正在進行並行抓取...
北區國稅局 [1/185] 營利事業列報廣告費，應以已實現為原則
北區國稅局 [2/185] 營利事業列報已達耐用年限固定資產報廢損失，應提示確實毀滅或廢棄的證明文件
北區國稅局 [3/185] 媒體報導「國稅局竟要檢舉人自己交合約，包庇權貴」，非屬事實，特予澄清
北區國稅局 [4/185] 變更保單要保人可能涉及贈與稅或遺產稅
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=bb2c32dca0a64da48fb02e4ac10094d2
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=6b2578fd7b7d487a902859588e71db9e
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=f3579a31f7454da696b1eb1d36800e3b
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=32db659da11a4392a7877df402727d8f
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=35d40f4600ad4e20b8101c118293ed34
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=c9de0fe302234ced85e61af5d8adc33b
北區國稅局 [5/185] 營利事業購置專為研發用的軟體程式費用，應經專案認定，始能列入研究發展支出適用投資抵減
北區國稅局 [6/185] 使用電子發票營業人，下載電子發票媒體檔，據實申報營業稅更Easy！
北區國稅局 [7/185] 個人買賣債權所獲取收益屬財產交易所得應辦理綜合所得稅結算申報
北區國稅局 [8/185] 退稅防詐騙！掌握稅務反詐三步驟
北區國稅局 [9/185] 購買新電冰箱、冷暖氣機、除濕機退還貨物稅，網路申請方便又快速！
北區國稅局 [10/185] 薔琵颱風致災免慌張！租稅減免有保障！
北區國稅局 [11/185] 營利事業列報國外投資損失，應以被投資事業或其轉投資事業因實質營運發生損失為限
北區國稅局 [12/185] 個人出售繼承或受贈舊制房屋，可比照新制房地，按消費者物價指數調整取得成本
北區國稅局 [13/185] 納稅義務人不服國稅局核定稅捐或罰鍰處分提起行政救濟之期限規定
北區國稅局 [14/185] 營利事業短漏報情節輕微者，仍得適用盈虧互抵的規定
北區國稅局 [15/185] 財政部北區國稅局於中秋節前一週暫停調閱帳證及外查業務，以維護稅務風紀
讀取失敗（第 1/3 次）：https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=956919e72b334a0ab449cfa42fd541aa
北區國稅局 [16/185] 財政部北區國稅局辦理「兼辦政風業務人員研習暨 陽光法案宣導」講習會，深化交流並強化廉能法治觀念
北區國稅局 [17/185] 財政部北區國稅局施展魔法 攜手稅務夥伴 點亮誠信 拒私菸反詐騙
北區國稅局 [18/185] 誠實納稅為上策，心存僥倖不可取!
北區國稅局 [19/185] 小心！稅務詐騙郵件層出不窮 請注意防範！
北區國稅局 [20/185] 個人將名下房屋無償供公司營業使用，應申報提供使用年度個人綜合所得稅租賃所得
北區國稅局 [21/185] 「115年度全國租稅達人爭霸賽」熱烈開跑，總獎金36萬餘元等你拿！
北區國稅局 [22/185] 自住房地經核准重購退稅，5年內改變用途或移轉將追回稅款
北區國稅局 [23/185] 營業人購買禮品贈送員工的進項稅額不得扣抵
北區國稅局 [24/185] 公開發行公司提列特別盈餘公積，應留意相關規定
北區國稅局 [25/185] 被繼承人生前借款與他人的債權，應列入遺產稅申報
北區國稅局 [26/185] 115年度營利事業暫繳申報9月開跑，多元線上繳稅更便利
北區國稅局 [27/185] 被繼承人生前投保境外未經核准壽險保單，受益人領取的死亡保險給付應申報遺產稅
北區國稅局 [28/185] 個人開立黃金存摺帳戶買賣黃金相關課稅規定
北區國稅局 [29/185] 買賣未上市（櫃）公司股票應正確報繳證券交易稅，以免影響過戶
北區國稅局 [30/185] 114年度綜合所得稅結算申報「手機報稅GO　好禮大FUN送」全國性抽獎活動開獎囉！
北區國稅局 [31/185] 公司借入資金無償或低利貸與他人，應依規定調減利息支出
北區國稅局 [32/185] 北區國稅局表揚115年度績優營業人 祝福績優營業人前程萬里、馬到成功
北區國稅局 [33/185] 非農業用地仍作農用，符合一定條件並檢附相關文件，可申請免徵遺產稅
北區國稅局 [34/185] 醫美院所提供非醫療勞務或銷售美容產品應辦理稅籍登記並課徵營業稅
北區國稅局 [35/185] 110年12月31日以前取得的食品飲料自動販賣機，請於116年底前完成調整或汰換機台，以符合逐筆開立發票規定
北區國稅局 [36/185] 欠稅人利用行政救濟期間意圖脫產，財產立即實施假扣押
北區國稅局 [37/185] 營利事業結清勞工退休準備金專戶，領回賸餘款應列報其他收入
北區國稅局 [38/185] 同一申報戶有海外所得達100萬元應併入基本所得額申報，如發現短漏報者請儘速補報補繳
北區國稅局 [39/185] 公私協力助攻企業數位轉型
北區國稅局 [40/185] 營利事業列報海外投資損失應以已實現為要件
北區國稅局 [41/185] 網紅取得分潤收入，達應辦理稅籍登記標準者，即應依規定辦理登記並報繳營業稅
北區國稅局 [42/185] 購買節能電器申請退還貨物稅案件常見錯誤態樣
北區國稅局 [43/185] 115年度私立醫療（事）機構申請「會計紀錄完備正確之醫院」認定自即日起開始受理
北區國稅局 [44/185] 營利事業以實質投資列報未分配盈餘減項，應減除政府補助款
北區國稅局 [45/185] 財政部北區國稅局辦理圖利與便民廉政講習，深耕稅務員法紀觀念
北區國稅局 [46/185] 外國營利事業申請適用權利金及技術服務報酬免納所得稅優惠，請留意四大修正重點
北區國稅局 [47/185] 豪雨致災別慌張，災損減免有保障！
北區國稅局 [48/185] 營利事業取得境外收入，應扣除相關成本費用，並以所得額計算境外所得可扣抵限額
北區國稅局 [49/185] 巴威來襲！災損減免看這裡，民眾權益別忘記！
北區國稅局 [50/185] 房地合一稅應按出售權利範圍計算自住房地免稅額
北區國稅局 [51/185] 財政部統一發票兌獎APP改版升級，領獎更簡單，使用更便利
北區國稅局 [52/185] 7月1日公告欠稅大戶名單
北區國稅局 [53/185] 住宅出租享節稅 符合法令不論信託均適用！
北區國稅局 [54/185] 停業當期無銷售額，仍應依規定申報營業稅
北區國稅局 [55/185] 發貨、收款還是結帳？搞懂統一發票開立時點
北區國稅局 [56/185] 被繼承人遺留股票「應收股利」申報指南：上市櫃與非上市櫃公司認定基準
北區國稅局 [57/185] 國稅局不會以電子郵件通知退稅，小心詐騙郵件！
北區國稅局 [58/185] 買車、換車貨物稅退稅小確幸！
北區國稅局 [59/185] 營利事業估列薪資支出，未具確定給付義務屬未實現支出不得列報為當期費用
北區國稅局 [60/185] 經常居住在中華民國境外的國民贈與境內財產，要如何申報贈與稅？
北區國稅局 [61/185] 股東會紀念品之進項稅額不得扣抵
北區國稅局 [62/185] 財政部北區國稅局於農曆端午節前一週暫停調閱帳證及外查業務，以維護稅務風紀
北區國稅局 [63/185] 豪雨造成災害損失，得依三步驟申請稅捐減免
北區國稅局 [64/185] 115年7月4日「雲端森呼吸 發票樂生活」租稅宣導暨健康齊步走活動
北區國稅局 [65/185] 114年度綜合所得稅網路申報附件上傳省時又方便！
北區國稅局 [66/185] 營利事業及機關團體採網路辦理114年度所得稅結算申報者，請注意附件送交期限！
北區國稅局 [67/185] 總獎金220萬！全國營業人開立雲端發票競賽開跑 邀企業共同響應綠色數位轉型
北區國稅局 [68/185] 個人媒合房地產交易領取的佣金  應申報執行業務所得
北區國稅局 [69/185] 網路賣家利用他人帳號分散營業收入，運用資料勾稽逃漏稅無所遁形
北區國稅局 [70/185] 免出門，線上申請個人財產所得清單，快速又便利
北區國稅局 [71/185] 北區國稅局「雲端森呼吸 發票樂生活」115年7月4日在新北大都會公園大手牽小手健走樂悠悠
北區國稅局 [72/185] 營利事業提示CFC財務報表，應注意送交期限
北區國稅局 [73/185] 營業人逾申報期後補開立統一發票，符合二要件可免罰
北區國稅局 [74/185] 綜所稅委託取款即將提兌，請確認扣款帳戶餘額，避免產生額外利息負擔
北區國稅局 [75/185] 對稅捐處分不服線上聲明訴願案件，補送訴願書之日期以機關收受日為準
北區國稅局 [76/185] 營利事業應覈實申報薪資支出，切勿利用人頭虛報成本以免受罰
北區國稅局 [77/185] 存股族小確幸！所得未達起徵點仍應申報，善用股利抵減稅額提領退稅紅包
北區國稅局 [78/185] 產製應課徵貨物稅產品應辦理廠商登記及產品登記並申報納稅
北區國稅局 [79/185] 個人交易特定股權，符合一定條件應申報房地合一稅
北區國稅局 [80/185] 父母將保單要保人變更為子女，注意申報贈與稅
北區國稅局 [81/185] 115年度遺產稅免稅額及各項扣除額金額
北區國稅局 [82/185] 臺新租稅協定新約自116年起適用，留意三大變動
北區國稅局 [83/185] 請多加使用網路辦理114年度營利事業所得稅結算申報及上傳附件！
北區國稅局 [84/185] 重複開立電子發票字軌號碼，營業人須賠付中獎獎金
北區國稅局 [85/185] 114年度綜合所得稅結算申報各項報稅服務措施及時段
北區國稅局 [86/185] 營利事業移轉訂價揭露常見錯誤解析與注意事項
北區國稅局 [87/185] 退稅首選「直撥退稅」安全、快速、免奔波，權益保障零時差！
北區國稅局 [88/185] 四大超商多媒體資訊機（KIOSK）取消健保卡認證，請多利用手機報稅快速完成申報
北區國稅局 [89/185] 個人申報綜合所得稅常見錯誤，請多加留意！
北區國稅局 [90/185] 多元繳稅超便利，完稅後務必完成「申報上傳」！
北區國稅局 [91/185] 營利事業CFC申報眉角多，請留意五大常見錯誤
北區國稅局 [92/185] 境外扣抵要注意，應適用而未適用協定之溢繳稅款不能抵
北區國稅局 [93/185] 企業捐贈運動產業節稅利多再升級！
北區國稅局 [94/185] 檢舉房東漏報租賃所得，證據是關鍵！
北區國稅局 [95/185] 報稅無障礙！綜所稅申報專版上線，視障朋友一指搞定
北區國稅局 [96/185] 申報減免資格核定完成？ 小心詐騙郵件！
北區國稅局 [97/185] 114年度綜合所得稅報稅省荷包利民措施
北區國稅局 [98/185] 被繼承人生前出售土地未完成過戶，申報遺產稅規定
北區國稅局 [99/185] 發票中獎通知？毋通點下去！
北區國稅局 [100/185] 手機報稅e指搞定，好禮等你抽！
北區國稅局 [101/185] 機關團體短漏報收入非屬情節輕微者，當心補稅處罰
北區國稅局 [102/185] 營業人銷售貨物或勞務予小規模營業人，應依規定開立統一發票並記載買受人統一編號，以免受罰
北區國稅局 [103/185] 居住型老人照顧服務、其他居住型、居家式及社區式長期照顧服務業增訂擴大書審純益率標準
北區國稅局 [104/185] 營業人車輛過戶，記得開立統一發票
北區國稅局 [105/185] 贈與未上市（櫃）且非興櫃公司股份（權）或出資額，應按資產淨值計算贈與財產價額
北區國稅局 [106/185] 守護外籍移工權益兼顧金融安全 離境前申報退稅須知
北區國稅局 [107/185] 北區國稅局稅務廉政志工培訓，協助民眾辦理所得稅申報
北區國稅局 [108/185] 國稅局運用AI輔助查核，營業人違章行為無所遁形
北區國稅局 [109/185] 產業創新條例第10條之1修正，留意四大措施
北區國稅局 [110/185] 簡化汽機車退還貨物稅申請，省時又省力
北區國稅局 [111/185] 營業人專營銷售未經加工之生鮮農、漁產品，雖免徵營業稅及免辦稅籍登記，但應申報營利所得
北區國稅局 [112/185] 綜合所得稅列舉扣除醫藥及生育費，受有保險給付部分，納稅義務人申報時，應自行減除
北區國稅局 [113/185] 營利事業投資境外金融商品所取得之海外所得，應併計課徵營利事業所得稅
北區國稅局 [114/185] 營利事業以盈餘進行實質投資列報未分配盈餘減項優惠，3年內變更使用目的未符合規定者，應補稅並加計利息
北區國稅局 [115/185] 稅務詐騙郵件出沒 提醒民眾小心防範！
北區國稅局 [116/185] 綜合所得稅長期照顧特別扣除額的適用規定
北區國稅局 [117/185] 營利事業所得稅結算申報常見短漏報收入態樣及應注意事項
北區國稅局 [118/185] 兼營營業人申報固定資產退稅，請務必按擇定方法計算稅額扣抵
北區國稅局 [119/185] 營業人智慧化經營結合雲端發票行動聯盟，創造雙贏
北區國稅局 [120/185] 營利事業購入舊制土地登記於他人名下，出售利益非屬免稅所得
北區國稅局 [121/185] 114年度綜合所得稅結算申報申請不適用稅額試算服務及變更郵寄地址作業，申請期限至115年3月16日止
北區國稅局 [122/185] 網路個人賣家請留意，當月銷售額達營業稅起徵點者，應即辦理稅籍登記！
北區國稅局 [123/185] 電動車減免貨物稅再延長到119年底
北區國稅局 [124/185] 獨資商號變更負責人，轉讓存貨及固定資產給新負責人時，記得報繳營業稅
北區國稅局 [125/185] 春節連假免煩惱，115年1月份營業稅按月申報展延至2月23日
北區國稅局 [126/185] 父母各自贈與婚嫁子女贈與財物不超過100萬元，不計入贈與總額
北區國稅局 [127/185] 個人網紅必看!綜合所得稅課稅規範
北區國稅局 [128/185] 報稅請留心！海外財產交易所得莫重複扣除成本費用，以免受罰
北區國稅局 [129/185] 大陸地區來源所得已繳納稅額申報可扣抵稅額之規定
北區國稅局 [130/185] 114年度綜合所得稅結算申報申請分開提供查詢「所得」及「扣除額資料」或不提供「扣除額資料」，申請期限至115年3月16日止
北區國稅局 [131/185] 114年度各類所得憑單申報截止日為115年2月2日，請運用電子申報系統透過網路方式上傳資料，儘早完成扣（免）繳憑單申報
北區國稅局 [132/185] 115年贈與稅納稅義務人每年得減除免稅額244萬元
北區國稅局 [133/185] 114年度每人基本生活所需的費用為21.3萬元
北區國稅局 [134/185] 114年度第4季查定課徵營業稅於115年2月1日開徵，請於期限內繳納
北區國稅局 [135/185] 有參與綜合所得稅捐贈扣除額單據電子化作業的機關團體，請於115年2月份上傳114年度個人現金捐贈資料
北區國稅局 [136/185] 北區國稅局元宵花燈兌換 小寶馬迎春納財好運來
北區國稅局 [137/185] 營利事業辦理一次性移轉訂價調整注意事項
北區國稅局 [138/185] 營利事業計算CFC當年度盈餘，應留意源自「低稅負區」轉投資事業之投資損益不得列報減除
北區國稅局 [139/185] 財政部北區國稅局於農曆春節前一週暫停調閱帳證及外查業務，以維護稅務風紀
北區國稅局 [140/185] 營利事業申報房地合一稅2.0應注意事項
北區國稅局 [141/185] 網紅交易課徵營業稅新制輔導期至115年6月30日止!
北區國稅局 [142/185] 營業人銷售貨物或勞務，應依時限開立發票
北區國稅局 [143/185] 網路銷售虛擬寶物，應依規定報繳營業稅
北區國稅局 [144/185] 113年度綜合所得稅核定補稅啟動，網路繳稅新措施，逾期30日內亦可線上繳納！
北區國稅局 [145/185] 銷售貨物或勞務予駐臺外交機構及其人員適用零稅率，收款金額應扣除營業稅
北區國稅局 [146/185] 不僅舊換新，新購汽機車也可退還貨物稅
北區國稅局 [147/185] 小規模營業人給付所得時需依規定扣繳稅款及依限辦理114年度扣（免）繳憑單申報
北區國稅局 [148/185] 查定課徵營業人使用行動支付或KIOSK，1%稅率優惠延長至117年底！
北區國稅局 [149/185] 營業人銷貨商品定價應內含營業稅，並主動開立統一發票
北區國稅局 [150/185] 出售境外不動產，記得申報個人基本所得稅額
北區國稅局 [151/185] 研究發展適用投資抵減之研發耗材支出須具可勾稽性，且例行性檢驗支出不得列入抵減範圍
北區國稅局 [152/185] 營利事業申請延期提示CFC財務報表，請留意提示期限
北區國稅局 [153/185] 佃農領取三七五租約補償費，應以半數列入領取年度個人綜合所得總額課稅
北區國稅局 [154/185] 個人因非自願離職出售房地，如有出租情事，不適用房地合一所得稅20％稅率
北區國稅局 [155/185] 被繼承人死亡前2年內贈與配偶的擬制遺產，不得作為給付生存配偶剩餘財產差額分配請求權的財產
北區國稅局 [156/185] 營業人未依規定開立發票，縱無漏稅額，仍應處行為罰
北區國稅局 [157/185] 避免電子發票空白字軌傳輸異常 三妙招不漏接
北區國稅局 [158/185] 113年度綜合所得稅第3批直撥退稅將於115年1月20日入帳！
北區國稅局 [159/185] 推動無紙化與便民服務--境內居住者各類所得憑單免填發作業
北區國稅局 [160/185] 旅行業辦理國人出國旅行團業務應依規定報繳營業稅
北區國稅局 [161/185] 營利事業列報修繕費應以實際發生者為限，且按支出性質正確歸屬費用或資本支出
北區國稅局 [162/185] 符合條件之營利事業所得稅申報核定案件，得以公告方式代替核定通知書之填具及送達
北區國稅局 [163/185] 線上申請查詢金融遺產服務，省時又便利
北區國稅局 [164/185] 欠稅追追追！怠於行使遺產分割權利致阻礙執行，國稅局得依法代位請求法院裁定分割
北區國稅局 [165/185] 僅提供公開資訊無法做為檢舉逃漏稅具體事證
北區國稅局 [166/185] 飼料免徵營業稅 認定範圍報您知
北區國稅局 [167/185] 欠稅人可提供第三人財產作為擔保，申請解除保全措施
北區國稅局 [168/185] 營利事業列報減除CFC源自非低稅負區採權益法認列轉投資事業之投資損益，應留意適用要件
北區國稅局 [169/185] 提高警覺、防範稅務詐騙　北區國稅局籲納稅人慎防冒名通知
北區國稅局 [170/185] 股東生前借錢給公司至死亡日未獲清償，記得列入遺產稅申報！
北區國稅局 [171/185] 無舊車免煩惱！新購小型汽機車也能退稅！
北區國稅局 [172/185] 北區國稅局2026年「金馬迎春」水果月曆兌換活動正式開始
北區國稅局 [173/185] 營業人銷售純金飾品請依規定開立統一發票
北區國稅局 [174/185] 個人贈與未上市櫃公司股票，該公司倘有轉投資上市櫃公司股票，應以贈與日調整後之資產淨值計算贈與稅
北區國稅局 [175/185] 遺產管理人可以依法申請被繼承人金融遺產參考清單
北區國稅局 [176/185] 個人間因借貸取得的利息所得，應自行辦理綜合所得稅結算申報
北區國稅局 [177/185] 鳳凰颱風來襲，遭遇災損三步驟，存證報備有保障
北區國稅局 [178/185] 個人出售受贈取得房地，取得成本應以受贈時房地現值按政府發布的消費者物價指數調整後價值申報房地合一稅
北區國稅局 [179/185] 經雙方合意之退回或折讓，賣方營業人應開立電子發票折讓單依限據實上傳
北區國稅局 [180/185] 機關團體請踴躍參與綜合所得稅捐贈扣除額單據電子化作業
北區國稅局 [181/185] 為關係企業背書保證應申報手續費收入
北區國稅局 [182/185] 營利事業逾期繳納應納稅額，符合情節輕微者，仍可適用盈虧互抵
北區國稅局 [183/185] 營利事業短漏報所得額，雖經核定無應納稅額，仍會被處罰
北區國稅局 [184/185] 公司或有限合夥事業適用產業創新條例第10條之1租稅優惠，應留意相關規定
北區國稅局 [185/185] 不動產出租業者申報營利事業所得稅應依實際營業內容正確適用行業代號
北區國稅局 爬取完畢！共取得 185 筆新聞稿，已儲存為 tax_news_北區國稅局.md。

正在檢查：中區國稅局 的總頁數...
-> 自動偵測到 中區國稅局 共有 9 頁。正在進行並行抓取...
中區國稅局 [1/88] 欠繳稅捐提起行政救濟仍得禁止財產處分
中區國稅局 [2/88] 民眾如因薔琵颱風外圍環流影響遭受災害損失，請於災害發生後30日內，向所在地稅捐稽徵機關申請報備，減免稅捐。
中區國稅局 [3/88] 創意激盪精彩，影音點亮吸睛！「E稅視界 show創意」租稅宣導活動得獎名單正式揭曉！
中區國稅局 [4/88] 遺產稅申報身心障礙特別扣除額時，須符合身心障礙者權益保障法或精神衛生法規定
中區國稅局 [5/88] 營利事業出售不動產，所得歸屬年度之認定，應以所有權移轉登記日期爲準
中區國稅局 [6/88] 本局所屬單位聯絡方式
中區國稅局 [7/88] 記帳業者注意！客戶退出經營時其個人資料應依法刪除或停止處理
中區國稅局 [8/88] 兼營營業人請注意!報繳當年度最後一期營業稅時，務必記得辦理當年度進項稅額調整，以免遭補稅處罰
中區國稅局 [9/88] 個人出售繼承或受贈取得舊制房屋，房屋評定現值成本可按物價指數調整
中區國稅局 [10/88] 納保服務不打烊 視訊諮詢免出門 納稅權益有保障
中區國稅局 [11/88] 個人房東出租房屋應如實申報租賃所得，以免補稅受罰
中區國稅局 [12/88] 轉讓預售屋未申報房屋土地交易所得稅！男子遭補稅並重罰
中區國稅局 [13/88] 營利事業申請延期提示CFC經會計師簽證之財務報表或替代該財務報表之其他文據者，應於本(115)年12月1日前提供
中區國稅局 [14/88] 房東出租房屋給符合租金補貼資格民眾，享有公益出租人租金收入免稅優惠
中區國稅局 [15/88] 機關團體銷售貨物或勞務，應依法課徵所得稅
中區國稅局 [16/88] 電子發票E起學！國稅局苗栗分局開講，從導入到實務操作一次學會
中區國稅局 [17/88] 使用多家行動支付或KIOSK收款之營業人，其租稅優惠應委託各行動支付廠商分別提出申請
中區國稅局 [18/88] 個人經常介紹生意賺取佣金，稅籍登記不能少
中區國稅局 [19/88] 記帳業者維護管理個資採用雙因子驗證機制，更加保障資訊及個資安全
中區國稅局 [20/88] 經核定使用統一發票，未依規定使用將補稅受罰
中區國稅局 [21/88] 鼓勵非屬健保特約之私立醫療(事)機構申請認定為會計紀錄完備正確
中區國稅局 [22/88] 網紅應辦理稅籍登記及報繳營業稅者，請儘速辦理補報補繳，符合規定者仍得免罰
中區國稅局 [23/88] 如發現有短漏報個人綜合所得稅應儘速補報及補繳稅款，以免受罰
中區國稅局 [24/88] 營利事業「逾期繳稅」未達加徵滯納金標準仍可適用盈虧互抵之規定
中區國稅局 [25/88] 被繼承人遺有抵押權，應如何申報遺產稅?
中區國稅局 [26/88] 個人出售舊制房屋財產交易所得，應核實計算並計入個人綜合所得稅申報
中區國稅局 [27/88] 中區國稅局重申對同仁涉貪零容忍並持續強化廉潔風紀
中區國稅局 [28/88] 有關八結國際股份有限公司及六月初一股份有限公司涉及逃漏稅案將依檢察官起訴事證依法辦理
中區國稅局 [29/88] 114年度綜合所得稅第2批退稅案件將於115年10月30日直撥入帳
中區國稅局 [30/88] 統一發票兌獎APP大變身！6大新功能上線，對獎、領獎、發票管理一次搞定
中區國稅局 [31/88] 電子發票開錯或重複開立，主動報備可免罰，溢付獎金由營業人賠付
中區國稅局 [32/88] 專營投資公司，投資收益應歸屬營業收入，並於計算免稅所得時，依規定分攤成本、費用或損失，以正確計算損益
中區國稅局 [33/88] 列報醫藥及生育費應扣除受有保險給付金額
中區國稅局 [34/88] 落實公務員廉政倫理規範 中區國稅局臺中分局籲中秋節勿送禮及邀宴
中區國稅局 [35/88] 營業人銷售免稅貨物或勞務，應於申請放棄適用免稅且經財政部核准後，始開立應稅統一發票
中區國稅局 [36/88] 統一發票推行暨「雲端遊樂趣」租稅宣導網路活動，樂園任務等你來解鎖!
中區國稅局 [37/88] 檢舉特種飲食業逃漏稅 提供「人、事、時、地、物」具體事證以利查核
中區國稅局 [38/88] 中區國稅局表揚115年績優營業人暨績優稅務志工
中區國稅局 [39/88] IG代購截圖、團購喊單等公開資訊，不足作為檢舉逃漏稅具體事證
中區國稅局 [40/88] 115年度營利事業所得稅暫繳申報，使用網路申報快速又便利
中區國稅局 [41/88] 中區國稅局對於同仁涉貪案 將全力配合司法機關調查並依法嚴懲
中區國稅局 [42/88] 捐贈財團法人享贈與稅免稅優惠　中區國稅局提醒先申請審查再移轉財產
中區國稅局 [43/88] 115年度營利事業所得稅暫繳申報，自115年9月1日起至9月30日止，請利用多元便利繳納管道繳納稅款，逾期將另加收利息
中區國稅局 [44/88] 營利事業應於2026年9月1日至9月30日間繳納並申報暫繳稅額
中區國稅局 [45/88] 個人股東取得股票股利 應依來源判斷是否課徵所得稅
中區國稅局 [46/88] 115年度營所稅暫繳申報受美國對等關稅政策影響者仍可申請延期或分期繳稅，信用卡繳稅便利性再升級
中區國稅局 [47/88] 114年度外僑綜合所得稅第二批直撥退稅於115年9月11日入帳
中區國稅局 [48/88] 店家沒開發票不一定違規，先查是否屬適用租稅優惠營業人，別急著檢舉！
中區國稅局 [49/88] 營利事業應妥善保存帳簿憑證，並正確歸屬成本或費用，以確保租稅權益!
中區國稅局 [50/88] 向境外電商購買電子勞務之買受人，應注意相關營業稅規範
中區國稅局 [51/88] 執行業務及其他所得業者依法設帳並保存憑證，可據以核實認定所得額，保障租稅權益
中區國稅局 [52/88] 提起訴願先繳納應納稅額1/3或提供擔保，可暫緩強制執行
中區國稅局 [53/88] 因身心障礙而負擔符合規範具醫療性質輔具之相關支出，不論係購買或租賃方式，均可檢附相關文件，就其實際負擔支出核實列報醫藥費列舉扣除。
中區國稅局 [54/88] 不動產出租業者申報營利事業所得稅應依實際營業內容申報正確適用行業代號
中區國稅局 [55/88] 個人或營利事業對0728日本熊本賑災專戶捐款，得全額列報捐贈列舉扣除額或費用
中區國稅局 [56/88] 營利事業受中聯油脂事件影響致商品報廢，可依規定認列損失
中區國稅局 [57/88] 115年度營利事業所得稅暫繳稅款e化繳稅再升級
中區國稅局 [58/88] 114年度綜合所得稅首批退稅，網路(手機)報稅優先適用
中區國稅局 [59/88] 從事社會住宅出租之營業人所收取之租金收入，符合相關規定可免徵營業稅
中區國稅局 [60/88] 外僑納稅義務人個人房地交易所得稅申報
中區國稅局 [61/88] 營利事業違反各種法規遭科處之罰鍰，不得列報費用或損失
中區國稅局 [62/88] 114年度外僑綜合所得稅第一批直撥退稅將於115年8月3日撥入納稅義務人指定帳戶
中區國稅局 [63/88] 中區國稅局舉辦廉政工作坊 AI協作案例教學深化專業倫理
中區國稅局 [64/88] 我國與新加坡所得稅協定新約自116年1月1日起適用，留意三大變動
中區國稅局 [65/88] 發票中獎電子郵件詐騙!請勿點擊假連結
中區國稅局 [66/88] 7月1日公告重大欠稅名單
中區國稅局 [67/88] 農地贈與免稅列管5年，違規作非農業使用將追繳贈與稅
中區國稅局 [68/88] 115年度營利事業所得稅暫繳申報將於9月正式開跑！
中區國稅局 [69/88] 一次看懂外僑綜合所得稅退稅程序
中區國稅局 [70/88] 國內營業人與機關團體向境外電商購買電子勞務應依法報繳營業稅
中區國稅局 [71/88] 營業人將購買之預售屋權利義務轉售，應按讓與價格全額開立應稅發票與買受人
中區國稅局 [72/88] 外僑綜合所得稅結算申報常犯疏失—居留日數之計算
中區國稅局 [73/88] 退稅通知需查證　詐騙話術別當真
中區國稅局 [74/88] 所得稅申報期已至，退稅採直撥入帳戶，省時又便利
中區國稅局 [75/88] 綜合所得稅長期照顧特別扣除額之排富條款
中區國稅局 [76/88] 符合特定條件教育文化公益慈善機關團體可免辦理114年度結算申報
中區國稅局 [77/88] 個人網紅課徵綜合所得稅一次看
中區國稅局 [78/88] 叔舅列報姪兒等其他親屬免稅額應注意父母是否有扶養能力
中區國稅局 [79/88] 納保官用心把關 守護納稅者權益更到位
中區國稅局 [80/88] 舊制房屋重購退稅優惠，放寬擴及未成年子女名下房屋
中區國稅局 [81/88] 114年度營所稅結算申報，多利用網路報稅及附件上傳，結合多元繳稅管道，響應ESG減碳省時
中區國稅局 [82/88] 115年度營利事業計算基本稅額時基本所得額應扣除之金額
中區國稅局 [83/88] 外僑個人綜所稅申報，應留意稅務居民身分
中區國稅局 [84/88] 扣繳檢查即將展開，中區國稅局籲請扣繳單位自動補報補繳可減輕處罰
中區國稅局 [85/88] 假冒國稅局詐騙，小心別上當受騙
中區國稅局 [86/88] 營利事業房地合一所得稅常見申報錯誤態樣
中區國稅局 [87/88] 經營遊戲幣買賣應注意發票開立規定，不符條件不得適用差額課稅
中區國稅局 [88/88] 報稅季將至  國稅局提醒防範退稅詐騙
中區國稅局 爬取完畢！共取得 88 筆新聞稿，已儲存為 tax_news_中區國稅局.md。

正在檢查：南區國稅局 的總頁數...
-> 自動偵測到 南區國稅局 共有 8 頁。正在進行並行抓取...
南區國稅局 [1/72] 房地合一重購退抵稅後，5年內不得再移轉或移作他用
南區國稅局 [2/72] 直系尊親屬已自行申報綜合所得稅，他人不得再列報扶養扣除
南區國稅局 [3/72] 颱風造成之災害損失，得申請相關稅捐減免
南區國稅局 [4/72] 發票存雲端，好運不漏接!屏東縣潮州鎮開出統一發票200萬元特獎!
南區國稅局 [5/72] 屏東分局恭賀115年度績優營業人鴻圖大展！
南區國稅局 [6/72] 外國營利事業取得境內服務報酬，符合條件可享免稅！
南區國稅局 [7/72] 海外所得達100萬元應併入個人基本所得額申報
南區國稅局 [8/72] 營業人銷售虛擬資產服務法所定之虛擬資產及穩定幣，不課徵營業稅
南區國稅局 [9/72] 新修正遺產及贈與稅法分期繳納 取消金額限制繳稅更彈性
南區國稅局 [10/72] 臺南分局11月7日「行動支付pay easy 發票存載具So Easy」租稅宣導活動，邀請您e起享便利抱好禮~
南區國稅局 [11/72] 「稅嗨音樂季 e起FUN唱趣」活動開跑嘍!人氣獎金等你拿!!
南區國稅局 [12/72] 「房屋買新賣新」不適用房地合一重購租稅優惠
南區國稅局 [13/72] 賀！長灘運動休閒飯店股份有限公司榮獲財政部115年度績優營業人
南區國稅局 [14/72] 民眾接獲遺產稅申報稅額試算通知書應詳加核對，如被繼承人遺有通知書未列之財產，仍須自行申報
南區國稅局 [15/72] 計算個人房地合一稅未提示取得、改良及移轉而支付之費用，如多人共有房地，以同一契約為計算基準，即合約總價3%上限30萬元，攤計各出賣人費用。
南區國稅局 [16/72] 電動車輛自116年1月1日起得具結免徵貨物稅出廠或進口
南區國稅局 [17/72] 獨資商號變更負責人，前後負責人均應申報營業稅
南區國稅局 [18/72] 營利事業列報差旅費，應證明與經營業務有關
南區國稅局 [19/72] 買10元飲料中千萬！全家鹽水武廟門市開出1,000萬元特別獎
南區國稅局 [20/72] 南區國稅局轄區開出1張1,000萬元特別獎、1張200萬元特獎及1張100萬元雲端發票專屬獎！
南區國稅局 [21/72] 納稅義務人捐贈政治獻金，應注意捐贈資格及金額限制
南區國稅局 [22/72] 欠繳稅捐可由第三人提供財產擔保塗銷禁止處分
南區國稅局 [23/72] 南區國稅局邀您共賞「至愛無垠＿陳清嘉、陳彥希西畫雙個展」
南區國稅局 [24/72] 死亡前2年內贈與，如親屬關係已消滅免併入遺產申報
南區國稅局 [25/72] 恆春稽徵所將於115年9月22日舉辦「營業稅申報講習會」，歡迎踴躍參加!
南區國稅局 [26/72] 國稅局邀您走進森林親子野餐，一起使用雲端發票愛地球!
南區國稅局 [27/72] 夫妻離婚後重複申報扶養子女免稅額之認定
南區國稅局 [28/72] 賣房不申報房地合一稅，小心假扣押找上門
南區國稅局 [29/72] 被繼承人所遺生前自益信託之農地，不得免徵遺產稅
南區國稅局 [30/72] 長照交通接送免徵營業稅，特約單位申報銷售額別搞錯
南區國稅局 [31/72] 中秋節將屆 南區國稅局籲請民眾共同守護廉能稅風
南區國稅局 [32/72] 115年9-11月校園巡迴租稅教育及宣導活動開始了!
南區國稅局 [33/72] 南區國稅局「稅月微光講堂市集：月圓廉心 稅月團圓」菸捐×廉政熱鬧登場
南區國稅局 [34/72] 營利事業所得稅暫繳申報附件網路上傳注意事項 報你知
南區國稅局 [35/72] 營利事業計算房地合一稅之土地交易所得，應留意得減除之土地漲價總數額！
南區國稅局 [36/72] 南區國稅局舉辦115年度績優營業人頒獎活動 表揚誠實納稅及積極配合使用電子發票榮譽
南區國稅局 [37/72] 收到「稅務退稅通知」簡訊或電子郵件切勿點擊不明連結，慎防假退稅真詐騙
南區國稅局 [38/72] 中古車商銷售二手車，記得誠實開立發票
南區國稅局 [39/72] 營業人發生進貨退出或折讓，應於發生當期申報扣減進項稅額
南區國稅局 [40/72] 虧損企業漏報所得，仍應處罰
南區國稅局 [41/72] 父母死亡前2年內變更保單要保人為子女，除應將保單價值申報贈與稅外，亦應列入遺產總額申報
南區國稅局 [42/72] 個人綜合所得稅申報於課稅年度死亡配偶（親屬）之免稅額者，別忘將其所得併入申報
南區國稅局 [43/72] 公司或有限合夥事業申報人工智慧（AI）與節能減碳投資抵減，應留意四大要件與期限！
南區國稅局 [44/72] 南區國稅局轄區開出1張1,000萬元特別獎、4張200萬元特獎及3張100萬元雲端發票專屬獎！
南區國稅局 [45/72] 身心障礙者「租賃」醫療輔具支出，得列報醫藥費列舉扣除額
南區國稅局 [46/72] 營利事業所得稅暫繳申報9月1日開跑，網路申報繳稅軟體8月15日起提供下載
南區國稅局 [47/72] 豪雨造成之災害損失，得申請相關稅捐減免
南區國稅局 [48/72] 115年度營所稅暫繳申報自9月1日開跑，符合條件者可免報、免繳！
南區國稅局 [49/72] 注意時限開發票，分次收款也沒煩惱！
南區國稅局 [50/72] 股東借款給公司，死亡日未受償餘額應列入遺產申報
南區國稅局 [51/72] 個人交易未上市櫃股票，應申報個人基本所得額
南區國稅局 [52/72] 「雲端新世界 環保享便利」統一發票兌獎APP宣導活動開跑！總獎額215萬元等您來拿！
南區國稅局 [53/72] 寄存送達之稅單，於寄存日即生送達效力！
南區國稅局 [54/72] 營利事業欲申報適用盈虧互抵，應注意相關要件
南區國稅局 [55/72] 114年度綜合所得稅第1批退稅將於7月31日入帳
南區國稅局 [56/72] 換屋族注意，房屋買新賣新，不適用房地合一稅重購退稅優惠
南區國稅局 [57/72] 線上申請購買節能電器退還減徵貨物稅，簡化身分認證更方便
南區國稅局 [58/72] 外國營利事業申請權利金免稅，請留意申請時效及要件
南區國稅局 [59/72] 營業人切勿以不實發票申報扣抵，以免觸法受罰！
南區國稅局 [60/72] 營利事業出售長期持股所獲利得可享租稅優惠
南區國稅局 [61/72] 綜合所得稅結算申報符合3條件之一，適用首批7/31退稅
南區國稅局 [62/72] 節能家電退稅線上辦　免出門輕鬆享便利！
南區國稅局 [63/72] 申報海外財產交易所得請注意勿重複扣除成本
南區國稅局 [64/72] 營利事業接受政府補助獎勵之經費，該如何認列收入？
南區國稅局 [65/72] 查定課徵營業人導入行動支付及KIOSK租稅優惠停止適用條件
南區國稅局 [66/72] 營業人請注意!股東會紀念品的進項稅額不得扣抵喔！
南區國稅局 [67/72] 定價含稅，買賣雙方都安心
南區國稅局 [68/72] 反賄選不缺席，守護全民稅收
南區國稅局 [69/72] 減稅超有感！每人基本生活費再調高！
南區國稅局 [70/72] 欠稅大戶注意了！國稅局7月1日起公告轄內重大欠稅案件名單
南區國稅局 [71/72] 扣繳申報房屋稅籍編號線上查，省時又便利！
南區國稅局 [72/72] 114年度每人基本生活所需費用調高至21.3萬元!
南區國稅局 爬取完畢！共取得 72 筆新聞稿，已儲存為 tax_news_南區國稅局.md。

--- 總共耗時 0:03:24.015 ms ---
````


## 第三部分：財政與稅務法規超連結自動產生器

### 全國法規資料庫 (MOJ) 自動校正

- **功能說明**：輸入條列式法律名稱，透過 API / 關鍵字搜尋自動比對 Pcode，生成最新《全國法規資料庫》網址。
- **官網連結**：[全國法規資料庫](https://law.moj.gov.tw)

#### 代碼-搜尋全國法規資料庫連結


```python
import re
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import requests

markdown_input = """
### 一、 法律

- [加值型及非加值型營業稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080)
- [稅捐稽徵法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001)
- [所得稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003)
- [所得基本稅額條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340115)
- [遺產及贈與稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340072)
- [保險法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0390002)
- [貨物稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340082)
- [菸酒稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340106)
- [菸害防制法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070003)
- [消費者保護法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001)
- [行政程序法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030055)
- [證券交易稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340093)
- [公司法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001)
- [動產擔保交易法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080011)
- [娛樂稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340087)
- [發展觀光條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110001)
- [臺灣地區與大陸地區人民關係條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=Q0010001)
- [租賃住宅市場發展及管理條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060125)

---

### 二、 施行細則與辦法/規則

- [加值型及非加值型營業稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340081)
- [統一發票使用辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340083)
- [統一發票給獎辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340085)
- [稅籍登記規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340086)
- [稅捐稽徵機關管理營利事業會計帳簿憑證辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340007)
- [購買電冰箱冷暖氣機除濕機退還減徵貨物稅稅額辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340146)
- [菸酒稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340108)
- [營利事業所得稅查核準則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340051)
- [稅務違章案件減免處罰標準](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340014)
- [貨物稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340011)
- [所得基本稅額條例施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340118)
- [外籍旅客購買特定貨物申請退還營業稅實施辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340109)
- [所得稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004)
- [兼營營業人營業稅額計算辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340084)
- [購買新小型汽機車及中古汽機車報廢或出口換購新車減徵退還新車貨物稅辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340138)
- [菸酒管理法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330012)
- [旅行業管理規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110002)

"""

session = requests.Session()
session.headers.update({
	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

def verify_url_title(url, target_name):
	try:
		resp = session.get(url, timeout=10)
		if resp.status_code == 200:
			soup = BeautifulSoup(resp.text, 'html.parser')
			title_elem = soup.find('a', id='hlLawName') or soup.find('title')
			if title_elem and target_name in title_elem.text.strip():
				return True
	except:
		pass
	return False

def search_moj_pcode(law_name):
	url = "https://law.moj.gov.tw/Law/LawSearchResult.aspx"

	params = {
		"ty": "ONEBAR",
		"kw": law_name,
		"sSearch": ""
	}

	headers = {
		"User-Agent": (
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
			"AppleWebKit/537.36 (KHTML, like Gecko) "
			"Chrome/150.0.0.0 Safari/537.36"
		)
	}

	try:
		response = requests.get(
			url,
			params=params,
			headers=headers,
			timeout=10
		)

		# HTTP 狀態異常
		if response.status_code != 200:
			print(f"HTTP Status：{response.status_code}")
			print(f"搜尋 URL：{response.url}")
			print("Response Text：")
			print(response.text[:10000])
			return None

		soup = BeautifulSoup(response.text, "html.parser")

		# 尋找法規名稱完全相符的連結
		for a in soup.find_all("a", href=True):
			text = a.get_text(" ", strip=True)

			if text != law_name:
				continue

			href = urljoin(response.url, a["href"])

			match = re.search(
				r"[?&]pcode=([A-Za-z0-9]+)",
				href,
				re.IGNORECASE
			)

			if match:
				return match.group(1).upper()

		# HTTP 正常，但找不到法規
		print(f"⚠️ 全國法規資料庫查無：{law_name}")
		print(f"搜尋 URL：{response.url}")

	except requests.RequestException as e:
		print(f"❌ HTTP Error：{e}")

	return None

def main():
	pattern = r'\[(.*?)\]\((https:\/\/law\.moj\.gov\.tw\/LawClass\/LawAll\.aspx\?pcode=([A-Z0-9]+))\)'
	matches = re.findall(pattern, markdown_input)
	
	updated_markdown = markdown_input
	print(f"開始驗證連結，共 {len(matches)} 個...\n")
	
	for name, url, pcode in matches:
		if verify_url_title(url, name):
			print(f"✅ [相符] {name} -> 保持原 Pcode: {pcode}")
		else:
			print(f"❌ [不符/失效] {name} (原 Pcode: {pcode}) -> 啟動全國法規資料庫 API 檢索...")
			correct_pcode = search_moj_pcode(name)
			if correct_pcode:
				correct_url = f"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode={correct_pcode}"
				updated_markdown = updated_markdown.replace(url, correct_url)
				print(f"   └─> 已修正為新 Pcode: {correct_pcode}")
			else:
				print(f"   └─> ⚠️ 搜尋不到 {name} 的新 Pcode")

	print("\n" + "="*60)
	print("校正完成後的 Markdown 結果：")
	print("="*60)
	print(f"```markdown\n{updated_markdown}\n```")

if __name__ == '__main__':
	main()
```

#### log

````log
開始驗證連結，共 46 個...

✅ [相符] 加值型及非加值型營業稅法 -> 保持原 Pcode: G0340080
✅ [相符] 稅捐稽徵法 -> 保持原 Pcode: G0340001
✅ [相符] 所得稅法 -> 保持原 Pcode: G0340003
✅ [相符] 所得基本稅額條例 -> 保持原 Pcode: G0340115
✅ [相符] 遺產及贈與稅法 -> 保持原 Pcode: G0340072
✅ [相符] 保險法 -> 保持原 Pcode: G0390002
❌ [不符/失效] 貨物稅條例 (原 Pcode: G0340082) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340076
❌ [不符/失效] 菸酒稅法 (原 Pcode: G0340106) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0330010
❌ [不符/失效] 菸害防制法 (原 Pcode: L0070003) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: L0070021
✅ [相符] 消費者保護法 -> 保持原 Pcode: J0170001
✅ [相符] 行政程序法 -> 保持原 Pcode: A0030055
❌ [不符/失效] 證券交易稅條例 (原 Pcode: G0340093) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340078
✅ [相符] 公司法 -> 保持原 Pcode: J0080001
❌ [不符/失效] 動產擔保交易法 (原 Pcode: J0080011) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0380024
❌ [不符/失效] 娛樂稅法 (原 Pcode: G0340087) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340106
✅ [相符] 發展觀光條例 -> 保持原 Pcode: K0110001
✅ [相符] 臺灣地區與大陸地區人民關係條例 -> 保持原 Pcode: Q0010001
✅ [相符] 租賃住宅市場發展及管理條例 -> 保持原 Pcode: D0060125
✅ [相符] 加值型及非加值型營業稅法施行細則 -> 保持原 Pcode: G0340081
❌ [不符/失效] 統一發票使用辦法 (原 Pcode: G0340083) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340082
❌ [不符/失效] 統一發票給獎辦法 (原 Pcode: G0340085) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340083
❌ [不符/失效] 稅籍登記規則 (原 Pcode: G0340086) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340087
❌ [不符/失效] 稅捐稽徵機關管理營利事業會計帳簿憑證辦法 (原 Pcode: G0340007) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340010
❌ [不符/失效] 購買電冰箱冷暖氣機除濕機退還減徵貨物稅稅額辦法 (原 Pcode: G0340146) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340153
❌ [不符/失效] 菸酒稅稽徵規則 (原 Pcode: G0340108) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0330022
✅ [相符] 營利事業所得稅查核準則 -> 保持原 Pcode: G0340051
❌ [不符/失效] 稅務違章案件減免處罰標準 (原 Pcode: G0340014) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340040
❌ [不符/失效] 貨物稅稽徵規則 (原 Pcode: G0340011) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340017
❌ [不符/失效] 所得基本稅額條例施行細則 (原 Pcode: G0340118) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340116
❌ [不符/失效] 外籍旅客購買特定貨物申請退還營業稅實施辦法 (原 Pcode: G0340109) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: K0110023
✅ [相符] 所得稅法施行細則 -> 保持原 Pcode: G0340004
❌ [不符/失效] 兼營營業人營業稅額計算辦法 (原 Pcode: G0340084) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340085
❌ [不符/失效] 購買新小型汽機車及中古汽機車報廢或出口換購新車減徵退還新車貨物稅辦法 (原 Pcode: G0340138) -> 啟動全國法規資料庫 API 檢索...
   └─> 已修正為新 Pcode: G0340140
✅ [相符] 菸酒管理法施行細則 -> 保持原 Pcode: G0330012
✅ [相符] 旅行業管理規則 -> 保持原 Pcode: K0110002
❌ [不符/失效] 電子發票實施作業要點 (原 Pcode: G0340129) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：電子發票實施作業要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E9%9B%BB%E5%AD%90%E7%99%BC%E7%A5%A8%E5%AF%A6%E6%96%BD%E4%BD%9C%E6%A5%AD%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 電子發票實施作業要點 的新 Pcode
❌ [不符/失效] 統一發票兌獎多元服務作業要點 (原 Pcode: G0340143) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：統一發票兌獎多元服務作業要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E7%B5%B1%E4%B8%80%E7%99%BC%E7%A5%A8%E5%85%8C%E7%8D%8E%E5%A4%9A%E5%85%83%E6%9C%8D%E5%8B%99%E4%BD%9C%E6%A5%AD%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 統一發票兌獎多元服務作業要點 的新 Pcode
❌ [不符/失效] 營業人開立銷售憑證時限表 (原 Pcode: G0340088) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：營業人開立銷售憑證時限表
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E7%87%9F%E6%A5%AD%E4%BA%BA%E9%96%8B%E7%AB%8B%E9%8A%B7%E5%94%AE%E6%86%91%E8%AD%89%E6%99%82%E9%99%90%E8%A1%A8&sSearch=
   └─> ⚠️ 搜尋不到 營業人開立銷售憑證時限表 的新 Pcode
❌ [不符/失效] 非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點 (原 Pcode: G0340124) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E9%9D%9E%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E4%BE%86%E6%BA%90%E6%89%80%E5%BE%97%E5%8F%8A%E9%A6%99%E6%B8%AF%E6%BE%B3%E9%96%80%E4%BE%86%E6%BA%90%E6%89%80%E5%BE%97%E8%A8%88%E5%85%A5%E5%80%8B%E4%BA%BA%E5%9F%BA%E6%9C%AC%E6%89%80%E5%BE%97%E9%A1%8D%E7%94%B3%E5%A0%B1%E5%8F%8A%E6%9F%A5%E6%A0%B8%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點 的新 Pcode
❌ [不符/失效] 營業稅電子資料申報繳稅作業要點 (原 Pcode: G0340105) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：營業稅電子資料申報繳稅作業要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E7%87%9F%E6%A5%AD%E7%A8%85%E9%9B%BB%E5%AD%90%E8%B3%87%E6%96%99%E7%94%B3%E5%A0%B1%E7%B9%B3%E7%A8%85%E4%BD%9C%E6%A5%AD%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 營業稅電子資料申報繳稅作業要點 的新 Pcode
❌ [不符/失效] 住宅家電汰舊換新節能補助作業要點 (原 Pcode: J0130080) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：住宅家電汰舊換新節能補助作業要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E4%BD%8F%E5%AE%85%E5%AE%B6%E9%9B%BB%E6%B1%B0%E8%88%8A%E6%8F%9B%E6%96%B0%E7%AF%80%E8%83%BD%E8%A3%9C%E5%8A%A9%E4%BD%9C%E6%A5%AD%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 住宅家電汰舊換新節能補助作業要點 的新 Pcode
❌ [不符/失效] 民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項 (原 Pcode: G0340140) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E6%B0%91%E7%87%9F%E9%80%80%E7%A8%85%E6%A5%AD%E8%80%85%E5%8F%8A%E7%89%B9%E5%AE%9A%E7%87%9F%E6%A5%AD%E4%BA%BA%E8%BE%A6%E7%90%86%E5%A4%96%E7%B1%8D%E6%97%85%E5%AE%A2%E8%B3%BC%E7%89%A9%E9%80%80%E7%A8%85%E6%87%89%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85&sSearch=
   └─> ⚠️ 搜尋不到 民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項 的新 Pcode
❌ [不符/失效] 個人經常性於網路發表創作或分享資訊課徵營業稅作業規範 (原 Pcode: G0340161) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：個人經常性於網路發表創作或分享資訊課徵營業稅作業規範
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E5%80%8B%E4%BA%BA%E7%B6%93%E5%B8%B8%E6%80%A7%E6%96%BC%E7%B6%B2%E8%B7%AF%E7%99%BC%E8%A1%A8%E5%89%B5%E4%BD%9C%E6%88%96%E5%88%86%E4%BA%AB%E8%B3%87%E8%A8%8A%E8%AA%B2%E5%BE%B5%E7%87%9F%E6%A5%AD%E7%A8%85%E4%BD%9C%E6%A5%AD%E8%A6%8F%E7%AF%84&sSearch=
   └─> ⚠️ 搜尋不到 個人經常性於網路發表創作或分享資訊課徵營業稅作業規範 的新 Pcode
❌ [不符/失效] 無添加糖飲料品適用免徵貨物稅規定應注意事項 (原 Pcode: G0340130) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：無添加糖飲料品適用免徵貨物稅規定應注意事項
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E7%84%A1%E6%B7%BB%E5%8A%A0%E7%B3%96%E9%A3%B2%E6%96%99%E5%93%81%E9%81%A9%E7%94%A8%E5%85%8D%E5%BE%B5%E8%B2%A8%E7%89%A9%E7%A8%85%E8%A6%8F%E5%AE%9A%E6%87%89%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85&sSearch=
   └─> ⚠️ 搜尋不到 無添加糖飲料品適用免徵貨物稅規定應注意事項 的新 Pcode
❌ [不符/失效] 各級稽徵機關處理違章漏稅及檢舉案件作業要點 (原 Pcode: G0340017) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：各級稽徵機關處理違章漏稅及檢舉案件作業要點
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E5%90%84%E7%B4%9A%E7%A8%BD%E5%BE%B5%E6%A9%9F%E9%97%9C%E8%99%95%E7%90%86%E9%81%95%E7%AB%A0%E6%BC%8F%E7%A8%85%E5%8F%8A%E6%AA%A2%E8%88%89%E6%A1%88%E4%BB%B6%E4%BD%9C%E6%A5%AD%E8%A6%81%E9%BB%9E&sSearch=
   └─> ⚠️ 搜尋不到 各級稽徵機關處理違章漏稅及檢舉案件作業要點 的新 Pcode
❌ [不符/失效] 查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範 (原 Pcode: G0340139) -> 啟動全國法規資料庫 API 檢索...
⚠️ 全國法規資料庫查無：查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範
搜尋 URL：https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw=%E6%9F%A5%E5%AE%9A%E8%AA%B2%E5%BE%B5%E7%87%9F%E6%A5%AD%E4%BA%BA%E4%BD%BF%E7%94%A8%E8%A1%8C%E5%8B%95%E6%94%AF%E4%BB%98%E5%8F%8A%E5%A4%9A%E5%AA%92%E9%AB%94%E8%B3%87%E8%A8%8A%E6%9C%8D%E5%8B%99%E6%A9%9F%E9%81%A9%E7%94%A8%E7%A7%9F%E7%A8%85%E5%84%AA%E6%83%A0%E4%BD%9C%E6%A5%AD%E8%A6%8F%E7%AF%84&sSearch=
   └─> ⚠️ 搜尋不到 查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範 的新 Pcode

============================================================
校正完成後的 Markdown 結果：
============================================================
```markdown

### 一、 法律

- [加值型及非加值型營業稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080)
- [稅捐稽徵法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001)
- [所得稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003)
- [所得基本稅額條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340115)
- [遺產及贈與稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340072)
- [保險法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0390002)
- [貨物稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340076)
- [菸酒稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330010)
- [菸害防制法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070021)
- [消費者保護法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001)
- [行政程序法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030055)
- [證券交易稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340078)
- [公司法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001)
- [動產擔保交易法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380024)
- [娛樂稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340106)
- [發展觀光條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110001)
- [臺灣地區與大陸地區人民關係條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=Q0010001)
- [租賃住宅市場發展及管理條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060125)

---

### 二、 施行細則與辦法/規則

- [加值型及非加值型營業稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340081)
- [統一發票使用辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340082)
- [統一發票給獎辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340083)
- [稅籍登記規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340087)
- [稅捐稽徵機關管理營利事業會計帳簿憑證辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340010)
- [購買電冰箱冷暖氣機除濕機退還減徵貨物稅稅額辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340153)
- [菸酒稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330022)
- [營利事業所得稅查核準則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340051)
- [稅務違章案件減免處罰標準](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340040)
- [貨物稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340017)
- [所得基本稅額條例施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340116)
- [外籍旅客購買特定貨物申請退還營業稅實施辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110023)
- [所得稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004)
- [兼營營業人營業稅額計算辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340085)
- [購買新小型汽機車及中古汽機車報廢或出口換購新車減徵退還新車貨物稅辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340140)
- [菸酒管理法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330012)
- [旅行業管理規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110002)

---

### 三、 點、要點、規範與注意事項

- [電子發票實施作業要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340129)
- [統一發票兌獎多元服務作業要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340143)
- [營業人開立銷售憑證時限表](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340088)
- [非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340124)
- [營業稅電子資料申報繳稅作業要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340105)
- [住宅家電汰舊換新節能補助作業要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0130080)
- [民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340140)
- [個人經常性於網路發表創作或分享資訊課徵營業稅作業規範](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340161)
- [無添加糖飲料品適用免徵貨物稅規定應注意事項](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340130)
- [各級稽徵機關處理違章漏稅及檢舉案件作業要點](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340017)
- [查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340139)

```
[Finished in 289.7s]
````

### 財政部主管法規系統 (MOF) 自動檢索

- **功能說明**：自動動態計算去年民國年份（如 2026年 帶入 114年），自動查抓「作業要點」、「執行業務者費用標準」等法規連結。
- **官網連結**：[財政部主管法規共用系統-法規檢索](https://law-out.mof.gov.tw/LawQuery.aspx)

#### 代碼-財政部法規檢索連結

```python
from datetime import datetime
import re
import urllib3
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import requests

# 關閉 SSL 警告訊息（避免部分政府網站 TLS 憑證警報）
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 1. 動態計算去年的民國年份（例如西元 2026 年 -> 民國 115 年 -> 去年為 114 年）
current_year = datetime.now().year
last_roc_year = current_year - 1911 - 1

# 2. 使用 f-string 動態帶入 {last_roc_year}
markdown_input = f"""

#### 三、 點、要點、規範與注意事項

- 電子發票實施作業要點
- 統一發票兌獎多元服務作業要點
- 營業人開立銷售憑證時限表
- 非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點
- 營業稅電子資料申報繳稅作業要點
- 查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範
- 民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項
- 個人經常性於網路發表創作或分享資訊課徵營業稅作業規範
- 無添加糖飲料品適用免徵貨物稅規定應注意事項
- 各級稽徵機關處理違章漏稅及檢舉案件作業要點

---

### 四、 各年度執行業務者收入與費用標準

- 稽徵機關核算{last_roc_year}年度執行業務者收入標準
- {last_roc_year}年度執行業務者費用標準
- {last_roc_year}年度財產租賃必要損耗及費用標準
- 固定資產耐用年數表

"""

# 建立 Session 並設定防阻擋 Headers
session = requests.Session()
session.headers.update({
	'User-Agent': (
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
		'AppleWebKit/537.36 (KHTML, like Gecko) '
		'Chrome/120.0.0.0 Safari/537.36'
	),
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
})

def clean_law_name(name):
	"""自動去除年份前綴（如 '114年度財產租賃...' 轉為 '財產租賃...'），提升搜尋命中率"""
	cleaned = re.sub(r'^\d{2,3}年度', '', name).strip()
	cleaned = re.sub(r'稽徵機關核算\d{2,3}年度', '稽徵機關核算', cleaned).strip()
	return cleaned

def search_mof_law_url(law_name):
	"""使用 LawResult.aspx 端點搜尋財政部法規網址"""
	search_kw = clean_law_name(law_name)
	url = "https://law-out.mof.gov.tw/LawResult.aspx"
	
	params = {
		"KW": search_kw,
		"name": "1",
		"content": "1",
		"now": "1",
		"fei": "1",
		"NLawTypeID": "all"
	}

	try:
		response = session.get(url, params=params, timeout=10, verify=False)
		
		# 1. 若伺服器精確命中並直接重定向至法規詳細頁面，直接回傳最終網址
		if "id=" in response.url or "LawContent" in response.url or "LawSingle" in response.url:
			return response.url

		# 2. 若傳回搜尋結果列表頁，從 HTML 中擷取第一筆法規超連結
		if response.status_code == 200:
			soup = BeautifulSoup(response.text, "html.parser")
			
			# 優先搜尋指向 LawContent/LawSingle/id 且名稱包含關鍵字者
			for a in soup.find_all("a", href=True):
				href = a["href"]
				text = a.get_text(" ", strip=True)
				if ("LawContent" in href or "LawSingle" in href or "id=" in href) and search_kw in text:
					return urljoin(response.url, href)

			# 備用搜尋：第一個符合法規內容格式的連結
			for a in soup.find_all("a", href=True):
				href = a["href"]
				if "LawContent" in href or "LawSingle" in href or "id=" in href:
					return urljoin(response.url, href)

	except Exception as e:
		print(f"\t⚠️ 網路請求異常 ({law_name}): {e}")

	return None

def process_markdown(input_text):
	lines = input_text.splitlines()
	updated_lines = []

	for line in lines:
		match_plain = re.match(r'^\s*-\s+(.+)$', line)

		if match_plain and not line.strip().startswith('---'):
			law_name = match_plain.group(1).strip()
			print(f"🔍 搜尋法規：{law_name}...")

			url = search_mof_law_url(law_name)
			if url:
				updated_lines.append(f"- [{law_name}]({url})")
				print(f"\t└─> ✅ 成功生成連結：{url}")
			else:
				updated_lines.append(line)
				print(f"\t└─> ⚠️ 財政部系統查無此法規，保持純文字")
		else:
			updated_lines.append(line)

	return "\n".join(updated_lines)

def main():
	print(f"動態帶入去年的民國年份：{last_roc_year} 年")
	print("開始檢索財政部法規連結...\n")
	output = process_markdown(markdown_input)

	print("\n" + "=" * 60)
	print("產製完成後的 Markdown 結果：")
	print("=" * 60)
	print(f"```markdown\n{output}\n```")

if __name__ == '__main__':
	main()
```

#### log

````log
動態帶入去年的民國年份：114 年
開始檢索財政部法規連結...

🔍 搜尋法規：電子發票實施作業要點...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=FL041411&kw=%e9%9b%bb%e5%ad%90%e7%99%bc%e7%a5%a8%e5%af%a6%e6%96%bd%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e
🔍 搜尋法規：統一發票兌獎多元服務作業要點...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010529&kw=%e7%b5%b1%e4%b8%80%e7%99%bc%e7%a5%a8%e5%85%8c%e7%8d%8e%e5%a4%9a%e5%85%83%e6%9c%8d%e5%8b%99%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e
🔍 搜尋法規：營業人開立銷售憑證時限表...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=FL006082&kw=%e7%87%9f%e6%a5%ad%e4%ba%ba%e9%96%8b%e7%ab%8b%e9%8a%b7%e5%94%ae%e6%86%91%e8%ad%89%e6%99%82%e9%99%90%e8%a1%a8
🔍 搜尋法規：非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=FL050477&kw=%e9%9d%9e%e4%b8%ad%e8%8f%af%e6%b0%91%e5%9c%8b%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e5%8f%8a%e9%a6%99%e6%b8%af%e6%be%b3%e9%96%80%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e8%a8%88%e5%85%a5%e5%80%8b%e4%ba%ba%e5%9f%ba%e6%9c%ac%e6%89%80%e5%be%97%e9%a1%8d%e7%94%b3%e5%a0%b1%e5%8f%8a%e6%9f%a5%e6%a0%b8%e8%a6%81%e9%bb%9e
🔍 搜尋法規：營業稅電子資料申報繳稅作業要點...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL009478&kw=%e7%87%9f%e6%a5%ad%e7%a8%85%e9%9b%bb%e5%ad%90%e8%b3%87%e6%96%99%e7%94%b3%e5%a0%b1%e7%b9%b3%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e
🔍 搜尋法規：查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382&kw=%e6%9f%a5%e5%ae%9a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e4%ba%ba%e4%bd%bf%e7%94%a8%e8%a1%8c%e5%8b%95%e6%94%af%e4%bb%98%e5%8f%8a%e5%a4%9a%e5%aa%92%e9%ab%94%e8%b3%87%e8%a8%8a%e6%9c%8d%e5%8b%99%e6%a9%9f%e9%81%a9%e7%94%a8%e7%a7%9f%e7%a8%85%e5%84%aa%e6%83%a0%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84
🔍 搜尋法規：民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL008725&kw=%e6%b0%91%e7%87%9f%e9%80%80%e7%a8%85%e6%a5%ad%e8%80%85%e5%8f%8a%e7%89%b9%e5%ae%9a%e7%87%9f%e6%a5%ad%e4%ba%ba%e8%be%a6%e7%90%86%e5%a4%96%e7%b1%8d%e6%97%85%e5%ae%a2%e8%b3%bc%e7%89%a9%e9%80%80%e7%a8%85%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85
🔍 搜尋法規：個人經常性於網路發表創作或分享資訊課徵營業稅作業規範...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011639&kw=%e5%80%8b%e4%ba%ba%e7%b6%93%e5%b8%b8%e6%80%a7%e6%96%bc%e7%b6%b2%e8%b7%af%e7%99%bc%e8%a1%a8%e5%89%b5%e4%bd%9c%e6%88%96%e5%88%86%e4%ba%ab%e8%b3%87%e8%a8%8a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84
🔍 搜尋法規：無添加糖飲料品適用免徵貨物稅規定應注意事項...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011679&kw=%e7%84%a1%e6%b7%bb%e5%8a%a0%e7%b3%96%e9%a3%b2%e6%96%99%e5%93%81%e9%81%a9%e7%94%a8%e5%85%8d%e5%be%b5%e8%b2%a8%e7%89%a9%e7%a8%85%e8%a6%8f%e5%ae%9a%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85
🔍 搜尋法規：各級稽徵機關處理違章漏稅及檢舉案件作業要點...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=FL006015&kw=%e5%90%84%e7%b4%9a%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e8%99%95%e7%90%86%e9%81%95%e7%ab%a0%e6%bc%8f%e7%a8%85%e5%8f%8a%e6%aa%a2%e8%88%89%e6%a1%88%e4%bb%b6%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e
🔍 搜尋法規：稽徵機關核算114年度執行業務者收入標準...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=FL023045&kw=%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e6%a0%b8%e7%ae%97%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e6%94%b6%e5%85%a5%e6%a8%99%e6%ba%96
🔍 搜尋法規：114年度執行業務者費用標準...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011721&kw=%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96
🔍 搜尋法規：114年度財產租賃必要損耗及費用標準...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011699&kw=%e8%b2%a1%e7%94%a2%e7%a7%9f%e8%b3%83%e5%bf%85%e8%a6%81%e6%90%8d%e8%80%97%e5%8f%8a%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96
🔍 搜尋法規：固定資產耐用年數表...
	└─> ✅ 成功生成連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010207&kw=%e5%9b%ba%e5%ae%9a%e8%b3%87%e7%94%a2%e8%80%90%e7%94%a8%e5%b9%b4%e6%95%b8%e8%a1%a8

============================================================
產製完成後的 Markdown 結果：
============================================================
```markdown


#### 三、 點、要點、規範與注意事項

- [電子發票實施作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL041411&kw=%e9%9b%bb%e5%ad%90%e7%99%bc%e7%a5%a8%e5%af%a6%e6%96%bd%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [統一發票兌獎多元服務作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010529&kw=%e7%b5%b1%e4%b8%80%e7%99%bc%e7%a5%a8%e5%85%8c%e7%8d%8e%e5%a4%9a%e5%85%83%e6%9c%8d%e5%8b%99%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [營業人開立銷售憑證時限表](https://law-out.mof.gov.tw/LawContent.aspx?id=FL006082&kw=%e7%87%9f%e6%a5%ad%e4%ba%ba%e9%96%8b%e7%ab%8b%e9%8a%b7%e5%94%ae%e6%86%91%e8%ad%89%e6%99%82%e9%99%90%e8%a1%a8)
- [非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL050477&kw=%e9%9d%9e%e4%b8%ad%e8%8f%af%e6%b0%91%e5%9c%8b%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e5%8f%8a%e9%a6%99%e6%b8%af%e6%be%b3%e9%96%80%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e8%a8%88%e5%85%a5%e5%80%8b%e4%ba%ba%e5%9f%ba%e6%9c%ac%e6%89%80%e5%be%97%e9%a1%8d%e7%94%b3%e5%a0%b1%e5%8f%8a%e6%9f%a5%e6%a0%b8%e8%a6%81%e9%bb%9e)
- [營業稅電子資料申報繳稅作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=GL009478&kw=%e7%87%9f%e6%a5%ad%e7%a8%85%e9%9b%bb%e5%ad%90%e8%b3%87%e6%96%99%e7%94%b3%e5%a0%b1%e7%b9%b3%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382&kw=%e6%9f%a5%e5%ae%9a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e4%ba%ba%e4%bd%bf%e7%94%a8%e8%a1%8c%e5%8b%95%e6%94%af%e4%bb%98%e5%8f%8a%e5%a4%9a%e5%aa%92%e9%ab%94%e8%b3%87%e8%a8%8a%e6%9c%8d%e5%8b%99%e6%a9%9f%e9%81%a9%e7%94%a8%e7%a7%9f%e7%a8%85%e5%84%aa%e6%83%a0%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84)
- [民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008725&kw=%e6%b0%91%e7%87%9f%e9%80%80%e7%a8%85%e6%a5%ad%e8%80%85%e5%8f%8a%e7%89%b9%e5%ae%9a%e7%87%9f%e6%a5%ad%e4%ba%ba%e8%be%a6%e7%90%86%e5%a4%96%e7%b1%8d%e6%97%85%e5%ae%a2%e8%b3%bc%e7%89%a9%e9%80%80%e7%a8%85%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85)
- [個人經常性於網路發表創作或分享資訊課徵營業稅作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011639&kw=%e5%80%8b%e4%ba%ba%e7%b6%93%e5%b8%b8%e6%80%a7%e6%96%bc%e7%b6%b2%e8%b7%af%e7%99%bc%e8%a1%a8%e5%89%b5%e4%bd%9c%e6%88%96%e5%88%86%e4%ba%ab%e8%b3%87%e8%a8%8a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84)
- [無添加糖飲料品適用免徵貨物稅規定應注意事項](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011679&kw=%e7%84%a1%e6%b7%bb%e5%8a%a0%e7%b3%96%e9%a3%b2%e6%96%99%e5%93%81%e9%81%a9%e7%94%a8%e5%85%8d%e5%be%b5%e8%b2%a8%e7%89%a9%e7%a8%85%e8%a6%8f%e5%ae%9a%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85)
- [各級稽徵機關處理違章漏稅及檢舉案件作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL006015&kw=%e5%90%84%e7%b4%9a%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e8%99%95%e7%90%86%e9%81%95%e7%ab%a0%e6%bc%8f%e7%a8%85%e5%8f%8a%e6%aa%a2%e8%88%89%e6%a1%88%e4%bb%b6%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)

---

### 四、 各年度執行業務者收入與費用標準

- [稽徵機關核算114年度執行業務者收入標準](https://law-out.mof.gov.tw/LawContent.aspx?id=FL023045&kw=%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e6%a0%b8%e7%ae%97%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e6%94%b6%e5%85%a5%e6%a8%99%e6%ba%96)
- [114年度執行業務者費用標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011721&kw=%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96)
- [114年度財產租賃必要損耗及費用標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011699&kw=%e8%b2%a1%e7%94%a2%e7%a7%9f%e8%b3%83%e5%bf%85%e8%a6%81%e6%90%8d%e8%80%97%e5%8f%8a%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96)
- [固定資產耐用年數表](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010207&kw=%e5%9b%ba%e5%ae%9a%e8%b3%87%e7%94%a2%e8%80%90%e7%94%a8%e5%b9%b4%e6%95%b8%e8%a1%a8)

```
````

#### 財政部解釋函令 (law-out.mof.gov.tw) 檢索器

- **功能說明**：針對「台財稅第 XXX 號函/令」精準自動補全主管機關函令庫網址。
- **官網連結**：[財政部主管法規共用系統-法規檢索](https://law-out.mof.gov.tw/LawQuery.aspx)

##### 代碼

```python
import re
import urllib3
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import requests

# 關閉 SSL 警告訊息（避免部分政府網站 TLS 憑證警報）
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

markdown_input = """

#### 五、 函、令、公告與釋令

- 財政部75年10月30日台財稅第7576167號函
- 財政部75年6月17日台財稅第7547250號函
- 財政部75年12月17日台財稅第7583203號函
- 財政部94年3月9日台財稅字第09404516480號函
- 財政部81年9月2日台財稅第810824931號函
- 財政部86年6月18日台財稅第861902099號函
- 財政部81年8月27日台財稅第810836121號函
- 財政部91年1月10日台財稅字第0900457915號函
- 財政部75年5月5日台財稅第7545545號函
- 財政部78年5月22日台財稅第780651695號函
- 財政部111年8月8日台財稅字第11104610672號令
- 財政部75年7月26日台財稅第7555737號函
- 財政部83年1月4日台財稅第821506638號函
- 財政部109年11月3日台財稅字第10904634190號令
- 財政部101年9月27日台財稅字第10104610410號令
- 財政部108年12月19日台財稅字第10804656820號公告
- 財政部86年10月4日台財稅第861918998號函
- 財政部96年4月13日台財稅字第09604523030號令
- 財政部105年12月21日台財稅字第10500709640號令
- 財政部68年1月9日台財稅第30131號函
- 財政部99年4月19日台財稅字第09900098590號函
- 財政部95年12月22日台財稅字第09504553860號令
- 財政部109年1月31日台財稅字第10904512340號令
- 財政部81年5月30日台財稅第810798531號函
- 財政部91年3月1日台財稅字第0910450881號函
- 財政部78年7月14日台財稅第780216832號函
- 財政部84年4月12日台財稅第841615409號函
- 財政部75年11月26日台財稅第7574126號函
- 財政部69年台財稅第35243號函
- 財政部84年6月29日台財稅第841632176號函
- 財政部109年12月16日台財稅字第10904677860號公告
- 財政部113年12月12日台財稅字第11304654284號令
- 財政部108年1月3日台財稅字第10700644330號令
- 財政部93年1月16日台財稅字第0920457998號函
- 財政部60年12月22日台財稅第39920號令
- 財政部87年12月3日台財稅第871976465號函
- 財政部77年11月28日台財稅第770417821號函
- 財政部81年4月30日台財稅第811664261號函
- 財政部81年8月11日台財稅第810322314號函
- 財政部79年11月14日台稅二發第790706080號釋令
- 財政部79年4月26日台財稅第780399554號函
- 財政部77年10月22日台財稅第770579317號函
- 財政部111年12月21日台財稅字第11104702140號公告
- 財政部109年6月4日台財稅字第10904575510號令
- 財政部84年3月22日台財稅第841608399號函
- 財政部87年6月18日台財稅第871947546號函
- 財政部82年5月17日台財稅第821485398號函
- 財政部68年3月9日台財稅第31501號函
- 財政部80年5月24日台財稅第800134552號函
- 財政部108年1月31日台財稅字第10704681060號令
- 財政部75年7月12日台財稅第7526254號函
- 財政部89年5月3日台財稅第0890452799號函
- 財政部101年11月28日台財稅字第10104649650號令
- 財政部114年12月12日台財稅字第11404664660號令
- 財政部賦稅署75年4月10日台稅二發第7523166號函
- 財政部賦稅署75年6月28日台稅二發第7525151號函
- 財政部賦稅署75年5月6日台稅二發第7546892號函
- 財政部賦稅署75年4月24日台稅二發第75236254號函
"""

# 建立 Session 並設定防阻擋 Headers
session = requests.Session()
session.headers.update({
	'User-Agent': (
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
		'AppleWebKit/537.36 (KHTML, like Gecko) '
		'Chrome/120.0.0.0 Safari/537.36'
	),
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
})

def extract_lnumber(text):
	"""從函令文字中擷取文號數字（例如：'台稅二發第7546892號' -> '7546892'）"""
	match = re.search(r'第([0-9A-Za-z]+)號', text)
	if match:
		return match.group(1)
	return None

def clean_title(title_text):
	"""清理標題開頭多餘的 '財政部...函：' 前綴與引號"""
	title = re.sub(r'^財政部.*?令[：\s]*|^財政部.*?函[：\s]*', '', title_text).strip('「」 ')
	return title

def search_mof_letter(letter_name):
	"""
	搜尋財政部解釋函令：
	回傳 (目標網址, 主旨標題, 是否為多筆結果)
	"""
	lnumber = extract_lnumber(letter_name)
	
	if lnumber:
		search_url = f"https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber={lnumber}&now=1&fei=1"
	else:
		search_url = f"https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&KW={letter_name}&now=1&fei=1"

	try:
		response = session.get(search_url, timeout=10, verify=False)
		
		# 1. 精確命中並直接重定向至單一函令詳細頁面 (單筆)
		if "id=" in response.url or "LawContent" in response.url or "LawSingle" in response.url:
			soup = BeautifulSoup(response.text, "html.parser")
			title_elem = soup.find("a", id="hlLawName") or soup.find("span", id="lblSubject") or soup.find("title")
			title = clean_title(title_elem.get_text(" ", strip=True)) if title_elem else ""
			return response.url, title, False

		# 2. 回傳搜尋結果列表頁面
		if response.status_code == 200:
			soup = BeautifulSoup(response.text, "html.parser")
			
			result_items = []
			for a in soup.find_all("a", href=True):
				href = a["href"]
				if "LawContent" in href or "LawSingle" in href or "id=" in href:
					full_url = urljoin(response.url, href)
					item_title = clean_title(a.get_text(" ", strip=True))
					result_items.append((full_url, item_title))

			# 進行網址去重
			unique_items = []
			seen_urls = set()
			for url, t in result_items:
				if url not in seen_urls:
					seen_urls.add(url)
					unique_items.append((url, t))

			# 若只有 1 筆：回傳單筆詳細頁網址、標題，is_multiple=False
			if len(unique_items) == 1:
				single_url, single_title = unique_items[0]
				return single_url, single_title, False
			
			# 若有 2 筆（含）以上：回傳列表網址、第一筆標題，is_multiple=True
			elif len(unique_items) > 1:
				_, first_title = unique_items[0]
				return search_url, first_title, True

	except Exception as e:
		print(f"\t⚠️ 搜尋函令發生異常 ({letter_name}): {e}")

	return None, "", False

def process_markdown(input_text):
	lines = input_text.splitlines()
	updated_lines = []

	for line in lines:
		match_plain = re.match(r'^\s*-\s+(.+)$', line)

		if match_plain and not line.strip().startswith('---'):
			letter_name = match_plain.group(1).strip()
			print(f"🔍 搜尋函令：{letter_name}...")

			url, title, is_multiple = search_mof_letter(letter_name)
			
			if url:
				if is_multiple:
					# 2 筆以上：名稱帶列表網址，標題為純文字
					if title:
						updated_lines.append(f"- [{letter_name}]({url})：「{title}」")
					else:
						updated_lines.append(f"- [{letter_name}]({url})")
					print(f"\t└─> ✅ 生成多筆結果連結：{url}")
				else:
					# 1 筆：名稱與標題皆帶詳細頁網址
					if title:
						updated_lines.append(f"- [{letter_name}]({url})：「[{title}]({url})」")
					else:
						updated_lines.append(f"- [{letter_name}]({url})")
					print(f"\t└─> ✅ 生成單筆詳細頁連結：{url}")
			else:
				updated_lines.append(line)
				print(f"\t└─> ⚠️ 財政部系統查無此函令，保持純文字")
		else:
			updated_lines.append(line)

	return "\n".join(updated_lines)

def main():
	print("開始檢索財政部解釋函令...\n")
	output = process_markdown(markdown_input)

	print("\n" + "=" * 60)
	print("產製完成後的 Markdown 結果：")
	print("=" * 60)
	print(f"```markdown\n{output}\n```")

if __name__ == '__main__':
	main()
```

##### log

````log
開始檢索財政部解釋函令...

🔍 搜尋函令：財政部75年10月30日台財稅第7576167號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005534
🔍 搜尋函令：財政部75年6月17日台財稅第7547250號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006237
🔍 搜尋函令：財政部75年12月17日台財稅第7583203號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006241
🔍 搜尋函令：財政部94年3月9日台財稅字第09404516480號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005709
🔍 搜尋函令：財政部81年9月2日台財稅第810824931號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006657
🔍 搜尋函令：財政部86年6月18日台財稅第861902099號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006731
🔍 搜尋函令：財政部81年8月27日台財稅第810836121號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007407
🔍 搜尋函令：財政部91年1月10日台財稅字第0900457915號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007408
🔍 搜尋函令：財政部75年5月5日台財稅第7545545號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005805
🔍 搜尋函令：財政部78年5月22日台財稅第780651695號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007511
🔍 搜尋函令：財政部111年8月8日台財稅字第11104610672號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011211
🔍 搜尋函令：財政部75年7月26日台財稅第7555737號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006586
🔍 搜尋函令：財政部83年1月4日台財稅第821506638號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007678
🔍 搜尋函令：財政部109年11月3日台財稅字第10904634190號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010881
🔍 搜尋函令：財政部101年9月27日台財稅字第10104610410號令...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部108年12月19日台財稅字第10804656820號公告...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部86年10月4日台財稅第861918998號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006954
🔍 搜尋函令：財政部96年4月13日台財稅字第09604523030號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006284
🔍 搜尋函令：財政部105年12月21日台財稅字第10500709640號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010193
🔍 搜尋函令：財政部68年1月9日台財稅第30131號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006473
🔍 搜尋函令：財政部99年4月19日台財稅字第09900098590號函...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部95年12月22日台財稅字第09504553860號令...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部109年1月31日台財稅字第10904512340號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010768
🔍 搜尋函令：財政部81年5月30日台財稅第810798531號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007405
🔍 搜尋函令：財政部91年3月1日台財稅字第0910450881號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006260
🔍 搜尋函令：財政部78年7月14日台財稅第780216832號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005475
🔍 搜尋函令：財政部84年4月12日台財稅第841615409號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005478
🔍 搜尋函令：財政部75年11月26日台財稅第7574126號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007443
🔍 搜尋函令：財政部69年台財稅第35243號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL008282
🔍 搜尋函令：財政部84年6月29日台財稅第841632176號函...
	└─> ✅ 生成多筆結果連結：https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=841632176&now=1&fei=1
🔍 搜尋函令：財政部109年12月16日台財稅字第10904677860號公告...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部113年12月12日台財稅字第11304654284號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL011539
🔍 搜尋函令：財政部108年1月3日台財稅字第10700644330號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010566
🔍 搜尋函令：財政部93年1月16日台財稅字第0920457998號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006360
🔍 搜尋函令：財政部60年12月22日台財稅第39920號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL003971
🔍 搜尋函令：財政部87年12月3日台財稅第871976465號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007499
🔍 搜尋函令：財政部77年11月28日台財稅第770417821號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006609
🔍 搜尋函令：財政部81年4月30日台財稅第811664261號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005001
🔍 搜尋函令：財政部81年8月11日台財稅第810322314號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005011
🔍 搜尋函令：財政部79年11月14日台稅二發第790706080號釋令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005467
🔍 搜尋函令：財政部79年4月26日台財稅第780399554號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006629
🔍 搜尋函令：財政部77年10月22日台財稅第770579317號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006926
🔍 搜尋函令：財政部111年12月21日台財稅字第11104702140號公告...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部109年6月4日台財稅字第10904575510號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010831
🔍 搜尋函令：財政部84年3月22日台財稅第841608399號函...
	└─> ✅ 生成多筆結果連結：https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=841608399&now=1&fei=1
🔍 搜尋函令：財政部87年6月18日台財稅第871947546號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005485
🔍 搜尋函令：財政部82年5月17日台財稅第821485398號函...
	└─> ✅ 生成多筆結果連結：https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=821485398&now=1&fei=1
🔍 搜尋函令：財政部68年3月9日台財稅第31501號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006319
🔍 搜尋函令：財政部80年5月24日台財稅第800134552號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL006613
🔍 搜尋函令：財政部108年1月31日台財稅字第10704681060號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010580
🔍 搜尋函令：財政部75年7月12日台財稅第7526254號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007291
🔍 搜尋函令：財政部89年5月3日台財稅第0890452799號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007298
🔍 搜尋函令：財政部101年11月28日台財稅字第10104649650號令...
	└─> ⚠️ 財政部系統查無此函令，保持純文字
🔍 搜尋函令：財政部114年12月12日台財稅字第11404664660號令...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382
🔍 搜尋函令：財政部賦稅署75年4月10日台稅二發第7523166號函...
	└─> ✅ 生成多筆結果連結：https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=7523166&now=1&fei=1
🔍 搜尋函令：財政部賦稅署75年6月28日台稅二發第7525151號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL005811
🔍 搜尋函令：財政部賦稅署75年5月6日台稅二發第7546892號函...
	└─> ✅ 生成單筆詳細頁連結：https://law-out.mof.gov.tw/LawContent.aspx?id=GL007933
🔍 搜尋函令：財政部賦稅署75年4月24日台稅二發第75236254號函...
	└─> ⚠️ 財政部系統查無此函令，保持純文字

============================================================
產製完成後的 Markdown 結果：
============================================================
```markdown


#### 五、 函、令、公告與釋令

- [財政部75年10月30日台財稅第7576167號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005534)：「[獨資營利事業轉讓或變更負責人其貨物之移轉視為銷售](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005534)」
- [財政部75年6月17日台財稅第7547250號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006237)：「[營業人對駐華外交機構及其人員之銷售額可適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006237)」
- [財政部75年12月17日台財稅第7583203號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006241)：「[銷售與駐華外交機構貨物適用零稅率之證明文件](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006241)」
- [財政部94年3月9日台財稅字第09404516480號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005709)：「[非按進銷項差額課徵營業稅之營業人外銷貨物不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005709)」
- [財政部81年9月2日台財稅第810824931號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006657)：「[將購買預售屋之權利義務讓與他人時如何開立發票釋疑](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006657)」
- [財政部86年6月18日台財稅第861902099號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006731)：「[分期付款售貨後因買受人違約而取回貨物再出售時應開發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006731)」
- [財政部81年8月27日台財稅第810836121號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007407)：「[因銷貨退回或折讓而退還買受人之稅額如未於當期扣減得延至次期](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007407)」
- [財政部91年1月10日台財稅字第0900457915號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007408)：「[稽徵機關對營業人銷貨退回或折讓未於當期或次期申報者應輔導其補報](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007408)」
- [財政部75年5月5日台財稅第7545545號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005805)：「[介紹國內買主由國外進口原料所得外匯佣金不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005805)」
- [財政部78年5月22日台財稅第780651695號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007511)：「[兼營投資業務之營業人其年度股利收入計算核釋](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007511)」
- [財政部111年8月8日台財稅字第11104610672號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011211)：「[從事網路銷售營業人未依規定辦理稅籍登記事項之變更者，於一定期間內得免處行為罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011211)」
- [財政部75年7月26日台財稅第7555737號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006586)：「[包作業不得以工程款抵付逾期罰款而免開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006586)」
- [財政部83年1月4日台財稅第821506638號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007678)：「[已申請註銷登記經查獲有營業行為之處罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007678)」
- [財政部109年11月3日台財稅字第10904634190號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010881)：「[納稅義務人之行為同時構成行為罰及漏稅罰採擇一從重處罰之規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010881)」
- 財政部101年9月27日台財稅字第10104610410號令
- 財政部108年12月19日台財稅字第10804656820號公告
- [財政部86年10月4日台財稅第861918998號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006954)：「[分支機構申請按月彙總開立發票應具備之要件](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006954)」
- [財政部96年4月13日台財稅字第09604523030號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006284)：「[依規定設置之產後護理機構提供產後護理服務免稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006284)」
- [財政部105年12月21日台財稅字第10500709640號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010193)：「[補充核釋產後護理機構提供產後護理服務範疇](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010193)」
- [財政部68年1月9日台財稅第30131號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006473)：「[因買賣契約一方放棄承買而沒收之定金屬其他所得](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006473)」
- 財政部99年4月19日台財稅字第09900098590號函
- 財政部95年12月22日台財稅字第09504553860號令
- [財政部109年1月31日台財稅字第10904512340號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010768)：「[透過網路銷售貨物或勞務月銷售額達起徵點者，應即辦理稅籍登記](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010768)」
- [財政部81年5月30日台財稅第810798531號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007405)：「[營業人外銷貨物復運進口其原退稅款毋須追補但應申報](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007405)」
- [財政部91年3月1日台財稅字第0910450881號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006260)：「[私人間因訴訟一次取得數年之利息所得應併入取得年度課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006260)」
- [財政部78年7月14日台財稅第780216832號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005475)：「[眼科診所銷售眼鏡應課徵營業稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005475)」
- [財政部84年4月12日台財稅第841615409號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005478)：「[獸醫經營之犬美容犬旅社業務應依法登記課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005478)」
- [財政部75年11月26日台財稅第7574126號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007443)：「[承租人遲付租金加收之違約金屬銷售額之範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007443)」
- [財政部69年台財稅第35243號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008282)：「[買賣未上市股票仍應課徵證券交易稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008282)」
- [財政部84年6月29日台財稅第841632176號函](https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=841632176&now=1&fei=1)：「轉讓未依法簽證之股票不屬證交稅課徵範圍」
- 財政部109年12月16日台財稅字第10904677860號公告
- [財政部113年12月12日台財稅字第11304654284號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011539)：「[營業人開立銷貨退回、進貨退出或折讓證明單，未依規定時限傳輸存證，於一定期間內得免處行為罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011539)」
- [財政部108年1月3日台財稅字第10700644330號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010566)：「[核釋貨物稅條例第12條之5所稱「前6個月內」期間之計算](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010566)」
- [財政部93年1月16日台財稅字第0920457998號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006360)：「[利用自宅從事早餐店等縱未具備牌號及僱用員工仍應辦營業登記](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006360)」
- [財政部60年12月22日台財稅第39920號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL003971)：「[85扣除額應以實際支付日期所屬年度為計算年度](https://law-out.mof.gov.tw/LawContent.aspx?id=GL003971)」
- [財政部87年12月3日台財稅第871976465號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007499)：「[公司贈送股東紀念品之進項稅額不得扣抵銷項稅額](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007499)」
- [財政部77年11月28日台財稅第770417821號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006609)：「[不論買受人有無索取發票均應依限開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006609)」
- [財政部81年4月30日台財稅第811664261號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005001)：「[公司接受補助從事研究且享有其成果者非屬課稅範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005001)」
- [財政部81年8月11日台財稅第810322314號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005011)：「[開發新產品取得工業局公同共有之補助款應課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005011)」
- [財政部79年11月14日台稅二發第790706080號釋令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005467)：「[公司建停車場供員工使用並收取費用者應課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005467)」
- [財政部79年4月26日台財稅第780399554號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006629)：「[營業人出售土地得免開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006629)」
- [財政部77年10月22日台財稅第770579317號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006926)：「[建築業預售房屋並約定以銀行貸款抵繳尾款者其開立發票時限](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006926)」
- 財政部111年12月21日台財稅字第11104702140號公告
- [財政部109年6月4日台財稅字第10904575510號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010831)：「[已稅車輛、已稅底盤或車身改（加）裝車身或加裝設備徵免貨物稅規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010831)」
- [財政部84年3月22日台財稅第841608399號函](https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=841608399&now=1&fei=1)：「核釋藥師藥劑生親自主持之藥局課稅相關規定」
- [財政部87年6月18日台財稅第871947546號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005485)：「[藥局依處方箋調劑向健保局領取調劑費藥品費不課營業稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005485)」
- [財政部82年5月17日台財稅第821485398號函](https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=821485398&now=1&fei=1)：「旅行業者辦理國外旅行團代收轉付範圍及支出憑證認定事宜」
- [財政部68年3月9日台財稅第31501號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006319)：「[證券交易稅之課徵與資產淨值無關](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006319)」
- [財政部80年5月24日台財稅第800134552號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006613)：「[未上市股票高價低報者仍應取得證據補稅處罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006613)」
- [財政部108年1月31日台財稅字第10704681060號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010580)：「[核釋個人匯回海外資金應否補報、計算及補繳基本稅額之認定原則及檢附文件規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010580)」
- [財政部75年7月12日台財稅第7526254號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007291)：「[使用統一發票之銷售額標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007291)」
- [財政部89年5月3日台財稅第0890452799號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007298)：「[營業性質特殊營業人之適用範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007298)」
- 財政部101年11月28日台財稅字第10104649650號令
- [財政部114年12月12日台財稅字第11404664660號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382)：「[查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382)」
- [財政部賦稅署75年4月10日台稅二發第7523166號函](https://law-out.mof.gov.tw/LawResult.aspx?NLawTypeID=all&name=1&content=1&LNumber=7523166&now=1&fei=1)：「金門馬祖酒廠出產之酒類免稅」
- [財政部賦稅署75年6月28日台稅二發第7525151號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005811)：「[代理國外出版商招攬廣告之報酬不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005811)」
- [財政部賦稅署75年5月6日台稅二發第7546892號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007933)：「[收受政府補助款如非因銷售貨物勞務者不課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007933)」
- 財政部賦稅署75年4月24日台稅二發第75236254號函
```
````

## 效益與改善建議

1. **Prompt 調整建議**：引註格式可在提示詞中預先附帶範例檔，確保 AI 生成時編號不會脫漏。
2. **Python 腳本優化**：建議加上 Request 失敗時的指數退避（exponential backoff）機制，避免批次請求被政府官網 WAF 阻擋。
3. **路徑處理**：內部 Windows 網路分享路徑（UNC path）已設定長路徑相容（`\\?\UNC\`），防範檔名過長問題。

### 產製新聞稿

```markdown
【目標設定】
- 目標稅目：營業稅
- 目標月份：115年10月
- 產出數量：3 篇

【執行規則】
1. 標題與主題：
	- 【選題強制分散】3 篇主題必須分別來自不同的來源檔案，絕對不可全部來自同一個檔案。
	- 絕對不可採用 113年10月至115年10月 期間出現過的任何臺北國稅局新聞稿標題與主題。
	- 3 篇彼此之間的標題必須完全相異。
2. 結構與用詞：完全模仿臺北國稅局近 2 年（即 114 年 2 月以後發布者）同類型新聞稿的段落結構、公務用語及法條引述口氣。不要寫聯絡人那一段。
3. 關於數字與日期：
	- 舉例之金額除依法條規定外，不得和原發布版本相同，盡量以整數為例（如 10 萬、200 萬等），且雙方約定金額（如房屋款與土地款）盡量不要相同。
	- 【重要】內文案例中的交易日期、進銷貨日期或發票期別，**統一設定在「115 年 5-6 月 至 115 年 7-8 月」期間**（例如：115年8月間、115 年 7-8 月期等）。
4. 輸出限制：只輸出結果，嚴禁任何前言、說明或結語，但每篇開頭須明確標明引用參考來源。
5. 【強制引註規範】內文凡論述法規條文、要件或引用具體事實時，該句句末「絕對必須」加上 Gemini Notebook 的來源標號（例如：[1]、[2]）。請確保每一段說明法條的句子結尾都有帶出編號，不可遺漏。

【輸出格式】
### [標題]
- 引用來源：[檔案名稱，要附來源標號]（原發布年月：ＯＯ年ＯＯ月）
- 資料來源說明
	- [條列來源，如：加值型及非加值型營業稅法第1條、第3條、第28條及第51條第1項第1款。]

[內文]

---
[重複上述格式輸出第 2 篇、第 3 篇......]
```

`請幫我在引用法條與事實的句子後方，加上來源參考編號。`


### 其他

#### flowchart

[Mermaid Live Editor](https://mermaid.live/edit#pako:eNqdVE1v00AQ_SvWVlGo5FT2OnZsH0Bt0p7gVMSBJIfNerZd6nijtQNt0xxAIEAqIgeEWoEQB6g4ABWUio8LvyZO-Bc4duKEqicu3t15b968WWu2h6jwALmoUOg1AkXhAY9cJd0qSjHahjYUXaXoEblTVBejt4jkpOVDWMzpCcREEG3y_TQHW53dWc4U2iBt7u9NwJAEYSkEyVkxY_QnS_LpFwqNgPniHt0mMlJu1jJ49Up9eHg6fPR-fPY4fnncXFZKpavKWn18_n387GkzI62lwWpv9PFkOHgyPrkff3lwrZ9h1RQ7iI9OD5Raffjw6_DT0eh8EL953fyHMBycHCjr9fj5YPTuV_zqW_zi55RQSwkbiZHPh6MPv_8cn8VvfzSXM3A989MIsiP1SRjWgClhNOmCcd93lzSvXCG6GkZS7IC7pJuWSTWVCl9IdwkMhpl3IbsjBYUw1KYCZaKXbZoLVFo6I3gmwAwwmXm5wH8b8IDykItgKgCWqWtaLgDMolouwFhiQbsgIOEO0NkFtCo61ef-qYVtbM_ToQVw8fq6dMG_3jIBz8tjqHhG3j_YzAQny19QUVbVjewvLAbXZjezGKzm7S5G1y-j1mbOkIq2JPeQy4gfgoraINtkckbpUDRQOiwN5CZbCV53tzQZpVLquYHUjOMLsZNRUnVOcyQE2pU82rsOd8HPKEn3nEYNlIxKUrxDgttCtJEbyW5SXoru1nZuptvxSAQ1TrYkmVMg8EBWRTeIkGvpKgKPR0LeyJ6B9DVIZZHbQ7vIxbazYjp6BVs6ti2njA0V7SHXtFYcw8JljB3N1iuaafVVtJ860VZsw3GwY2Jdsw3b0O3-X21Bdeo)

```text mermaid
%%{
  init: {
    'theme': 'dark',
    'themeVariables': {
      'fontSize': '26px',
      'fontFamily': 'sans-serif',
      'nodeBorder': '#888888',
      'nodeStrokeWidth': '2px',
      'mainBkg': '#1e1e1e'
    }
  }
}%%
flowchart TD
    A([匯入資料]) --> B[起草]
    B --> C{符合要求?}
    C --> |是| D[儲存結果]
    C --> |否| E[提示更改]
    D --> F([完稿陳核])
    E --> B

    classDef start fill:#0d47a1,stroke:#1565c0,color:#e3f2fd
    classDef process0 fill:#4a148c,stroke:#7b1fa2,color:#f3e5f5
    classDef process fill:#0d47a1,stroke:#1565c0,color:#e3f2fd
    classDef decision fill:#e65100,stroke:#ef6c00,color:#fff3e0
    classDef reject fill:#b71c1c,stroke:#c62828,color:#ffebee
    classDef success fill:#1b5e20,stroke:#2e7d32,color:#e8f5e9
    
    class A,F start
    class B process
    class C decision
    class E process
    class D success
```

### 條列所有資料來源

```
請條列所有資料來源

整理彙編檔案中所有出現過之「資料來源說明」。依照要求，**排除所有條、項、款、目等具體法規項次**，僅保留最基礎的法規名稱、函、令或公告。如歸屬於「函、令、公告與釋令」必須有函號、令號；其他部分僅收錄文件，不要網站，並依性質分類整理如下：

### 全國法規資料庫

#### 一、 法律

#### 二、 施行細則與辦法/規則

---

### 財政部

#### 三、 點、要點、規範與注意事項

#### 四、 各年度執行業務者收入與費用標準

#### 五、 函、令、公告與釋令

---

### 其他

#### 六、 其他說明資料 (問與答/系統)
```

#### 全國法規資料庫

##### 一、 法律

- [加值型及非加值型營業稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080)
- [稅捐稽徵法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001)
- [所得稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003)
- [所得基本稅額條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340115)
- [遺產及贈與稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340072)
- [保險法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0390002)
- [貨物稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340076)
- [菸酒稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330010)
- [菸害防制法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070021)
- [消費者保護法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001)
- [行政程序法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030055)
- [證券交易稅條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340078)
- [公司法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001)
- [動產擔保交易法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380024)
- [娛樂稅法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340106)
- [發展觀光條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110001)
- [臺灣地區與大陸地區人民關係條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=Q0010001)
- [租賃住宅市場發展及管理條例](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060125)

---

##### 二、 施行細則與辦法/規則

- [稅務違章案件減免處罰標準](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340040)
- [加值型及非加值型營業稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340081)
- [統一發票使用辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340082)
- [統一發票給獎辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340083)
- [兼營營業人營業稅額計算辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340085)
- [稅籍登記規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340087)
- [稅捐稽徵機關管理營利事業會計帳簿憑證辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340010)
- [旅行業管理規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110002)
- [外籍旅客購買特定貨物申請退還營業稅實施辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110023)
- [所得稅法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004)
- [營利事業所得稅查核準則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340051)
- [所得基本稅額條例施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340116)
- [菸酒管理法施行細則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330012)
- [菸酒稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330022)
- [貨物稅稽徵規則](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340017)
- [購買新小型汽機車及中古汽機車報廢或出口換購新車減徵退還新車貨物稅辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340140)
- [購買電冰箱冷暖氣機除濕機退還減徵貨物稅稅額辦法](https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340153)

---

#### 財政部

##### 三、 點、要點、規範與注意事項

- [電子發票實施作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL041411&kw=%e9%9b%bb%e5%ad%90%e7%99%bc%e7%a5%a8%e5%af%a6%e6%96%bd%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [統一發票兌獎多元服務作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010529&kw=%e7%b5%b1%e4%b8%80%e7%99%bc%e7%a5%a8%e5%85%8c%e7%8d%8e%e5%a4%9a%e5%85%83%e6%9c%8d%e5%8b%99%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [營業人開立銷售憑證時限表](https://law-out.mof.gov.tw/LawContent.aspx?id=FL006082&kw=%e7%87%9f%e6%a5%ad%e4%ba%ba%e9%96%8b%e7%ab%8b%e9%8a%b7%e5%94%ae%e6%86%91%e8%ad%89%e6%99%82%e9%99%90%e8%a1%a8)
- [非中華民國來源所得及香港澳門來源所得計入個人基本所得額申報及查核要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL050477&kw=%e9%9d%9e%e4%b8%ad%e8%8f%af%e6%b0%91%e5%9c%8b%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e5%8f%8a%e9%a6%99%e6%b8%af%e6%be%b3%e9%96%80%e4%be%86%e6%ba%90%e6%89%80%e5%be%97%e8%a8%88%e5%85%a5%e5%80%8b%e4%ba%ba%e5%9f%ba%e6%9c%ac%e6%89%80%e5%be%97%e9%a1%8d%e7%94%b3%e5%a0%b1%e5%8f%8a%e6%9f%a5%e6%a0%b8%e8%a6%81%e9%bb%9e)
- [營業稅電子資料申報繳稅作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=GL009478&kw=%e7%87%9f%e6%a5%ad%e7%a8%85%e9%9b%bb%e5%ad%90%e8%b3%87%e6%96%99%e7%94%b3%e5%a0%b1%e7%b9%b3%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)
- [查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382&kw=%e6%9f%a5%e5%ae%9a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e4%ba%ba%e4%bd%bf%e7%94%a8%e8%a1%8c%e5%8b%95%e6%94%af%e4%bb%98%e5%8f%8a%e5%a4%9a%e5%aa%92%e9%ab%94%e8%b3%87%e8%a8%8a%e6%9c%8d%e5%8b%99%e6%a9%9f%e9%81%a9%e7%94%a8%e7%a7%9f%e7%a8%85%e5%84%aa%e6%83%a0%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84)
- [民營退稅業者及特定營業人辦理外籍旅客購物退稅應注意事項](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008725&kw=%e6%b0%91%e7%87%9f%e9%80%80%e7%a8%85%e6%a5%ad%e8%80%85%e5%8f%8a%e7%89%b9%e5%ae%9a%e7%87%9f%e6%a5%ad%e4%ba%ba%e8%be%a6%e7%90%86%e5%a4%96%e7%b1%8d%e6%97%85%e5%ae%a2%e8%b3%bc%e7%89%a9%e9%80%80%e7%a8%85%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85)
- [個人經常性於網路發表創作或分享資訊課徵營業稅作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011639&kw=%e5%80%8b%e4%ba%ba%e7%b6%93%e5%b8%b8%e6%80%a7%e6%96%bc%e7%b6%b2%e8%b7%af%e7%99%bc%e8%a1%a8%e5%89%b5%e4%bd%9c%e6%88%96%e5%88%86%e4%ba%ab%e8%b3%87%e8%a8%8a%e8%aa%b2%e5%be%b5%e7%87%9f%e6%a5%ad%e7%a8%85%e4%bd%9c%e6%a5%ad%e8%a6%8f%e7%af%84)
- [無添加糖飲料品適用免徵貨物稅規定應注意事項](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011679&kw=%e7%84%a1%e6%b7%bb%e5%8a%a0%e7%b3%96%e9%a3%b2%e6%96%99%e5%93%81%e9%81%a9%e7%94%a8%e5%85%8d%e5%be%b5%e8%b2%a8%e7%89%a9%e7%a8%85%e8%a6%8f%e5%ae%9a%e6%87%89%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85)
- [各級稽徵機關處理違章漏稅及檢舉案件作業要點](https://law-out.mof.gov.tw/LawContent.aspx?id=FL006015&kw=%e5%90%84%e7%b4%9a%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e8%99%95%e7%90%86%e9%81%95%e7%ab%a0%e6%bc%8f%e7%a8%85%e5%8f%8a%e6%aa%a2%e8%88%89%e6%a1%88%e4%bb%b6%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e)

---

##### 四、 各年度執行業務者收入與費用標準

- [稽徵機關核算114年度執行業務者收入標準](https://law-out.mof.gov.tw/LawContent.aspx?id=FL023045&kw=%e7%a8%bd%e5%be%b5%e6%a9%9f%e9%97%9c%e6%a0%b8%e7%ae%97%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e6%94%b6%e5%85%a5%e6%a8%99%e6%ba%96)
- [114年度執行業務者費用標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011721&kw=%e5%9f%b7%e8%a1%8c%e6%a5%ad%e5%8b%99%e8%80%85%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96)
- [114年度財產租賃必要損耗及費用標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011699&kw=%e8%b2%a1%e7%94%a2%e7%a7%9f%e8%b3%83%e5%bf%85%e8%a6%81%e6%90%8d%e8%80%97%e5%8f%8a%e8%b2%bb%e7%94%a8%e6%a8%99%e6%ba%96)
- [固定資產耐用年數表](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010207&kw=%e5%9b%ba%e5%ae%9a%e8%b3%87%e7%94%a2%e8%80%90%e7%94%a8%e5%b9%b4%e6%95%b8%e8%a1%a8)

---

##### 五、 函、令、公告與釋令

- [財政部75年10月30日台財稅第7576167號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005534)：「[獨資營利事業轉讓或變更負責人其貨物之移轉視為銷售](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005534)」
- [財政部75年6月17日台財稅第7547250號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006237)：「[營業人對駐華外交機構及其人員之銷售額可適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006237)」
- [財政部75年12月17日台財稅第7583203號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006241)：「[銷售與駐華外交機構貨物適用零稅率之證明文件](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006241)」
- [財政部94年3月9日台財稅字第09404516480號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005709)：「[非按進銷項差額課徵營業稅之營業人外銷貨物不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005709)」
- [財政部81年9月2日台財稅第810824931號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006657)：「[將購買預售屋之權利義務讓與他人時如何開立發票釋疑](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006657)」
- [財政部86年6月18日台財稅第861902099號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006731)：「[分期付款售貨後因買受人違約而取回貨物再出售時應開發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006731)」
- [財政部81年8月27日台財稅第810836121號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007407)：「[因銷貨退回或折讓而退還買受人之稅額如未於當期扣減得延至次期](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007407)」
- [財政部91年1月10日台財稅字第0900457915號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007408)：「[稽徵機關對營業人銷貨退回或折讓未於當期或次期申報者應輔導其補報](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007408)」
- [財政部75年5月5日台財稅第7545545號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005805)：「[介紹國內買主由國外進口原料所得外匯佣金不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005805)」
- [財政部78年5月22日台財稅第780651695號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007511)：「[兼營投資業務之營業人其年度股利收入計算核釋](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007511)」
- [財政部111年8月8日台財稅字第11104610672號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011211)：「[從事網路銷售營業人未依規定辦理稅籍登記事項之變更者，於一定期間內得免處行為罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011211)」
- [財政部75年7月26日台財稅第7555737號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006586)：「[包作業不得以工程款抵付逾期罰款而免開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006586)」
- [財政部83年1月4日台財稅第821506638號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007678)：「[已申請註銷登記經查獲有營業行為之處罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007678)」
- [財政部109年11月3日台財稅字第10904634190號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010881)：「[納稅義務人之行為同時構成行為罰及漏稅罰採擇一從重處罰之規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010881)」
- [財政部86年10月4日台財稅第861918998號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006954)：「[分支機構申請按月彙總開立發票應具備之要件](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006954)」
- [財政部96年4月13日台財稅字第09604523030號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006284)：「[依規定設置之產後護理機構提供產後護理服務免稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006284)」
- [財政部105年12月21日台財稅字第10500709640號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010193)：「[補充核釋產後護理機構提供產後護理服務範疇](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010193)」
- [財政部68年1月9日台財稅第30131號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006473)：「[因買賣契約一方放棄承買而沒收之定金屬其他所得](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006473)」
- [財政部109年1月31日台財稅字第10904512340號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010768)：「[透過網路銷售貨物或勞務月銷售額達起徵點者，應即辦理稅籍登記](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010768)」
- [財政部81年5月30日台財稅第810798531號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007405)：「[營業人外銷貨物復運進口其原退稅款毋須追補但應申報](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007405)」
- [財政部91年3月1日台財稅字第0910450881號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006260)：「[私人間因訴訟一次取得數年之利息所得應併入取得年度課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006260)」
- [財政部78年7月14日台財稅第780216832號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005475)：「[眼科診所銷售眼鏡應課徵營業稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005475)」
- [財政部84年4月12日台財稅第841615409號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005478)：「[獸醫經營之犬美容犬旅社業務應依法登記課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005478)」
- [財政部75年11月26日台財稅第7574126號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007443)：「[承租人遲付租金加收之違約金屬銷售額之範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007443)」
- [財政部69年台財稅第35243號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008282)：「[買賣未上市股票仍應課徵證券交易稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL008282)」
- [財政部84年6月29日台財稅第841632176號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006247)：「[轉讓未依法簽證之股票不屬證交稅課徵範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006247)」
- [財政部113年12月12日台財稅字第11304654284號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011539)：「[營業人開立銷貨退回、進貨退出或折讓證明單，未依規定時限傳輸存證，於一定期間內得免處行為罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL011539)」
- [財政部108年1月3日台財稅字第10700644330號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010566)：「[核釋貨物稅條例第12條之5所稱「前6個月內」期間之計算](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010566)」
- [財政部93年1月16日台財稅字第0920457998號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006360)：「[利用自宅從事早餐店等縱未具備牌號及僱用員工仍應辦營業登記](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006360)」
- [財政部60年12月22日台財稅第39920號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL003971)：「[85扣除額應以實際支付日期所屬年度為計算年度](https://law-out.mof.gov.tw/LawContent.aspx?id=GL003971)」
- [財政部87年12月3日台財稅第871976465號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007499)：「[公司贈送股東紀念品之進項稅額不得扣抵銷項稅額](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007499)」
- [財政部77年11月28日台財稅第770417821號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006609)：「[不論買受人有無索取發票均應依限開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006609)」
- [財政部81年4月30日台財稅第811664261號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005001)：「[公司接受補助從事研究且享有其成果者非屬課稅範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005001)」
- [財政部81年8月11日台財稅第810322314號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005011)：「[開發新產品取得工業局公同共有之補助款應課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005011)」
- [財政部79年11月14日台稅二發第790706080號釋令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005467)：「[公司建停車場供員工使用並收取費用者應課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005467)」
- [財政部79年4月26日台財稅第780399554號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006629)：「[營業人出售土地得免開立發票](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006629)」
- [財政部77年10月22日台財稅第770579317號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006926)：「[建築業預售房屋並約定以銀行貸款抵繳尾款者其開立發票時限](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006926)」
- [財政部109年6月4日台財稅字第10904575510號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010831)：「[已稅車輛、已稅底盤或車身改（加）裝車身或加裝設備徵免貨物稅規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010831)」
- [財政部87年6月18日台財稅第871947546號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005485)：「[藥局依處方箋調劑向健保局領取調劑費藥品費不課營業稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005485)」
- [財政部82年5月17日台財稅第821485398號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006661)：「[旅行業者辦理國外旅行團代收轉付範圍及支出憑證認定事宜](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006661)」
- [財政部68年3月9日台財稅第31501號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006319)：「[證券交易稅之課徵與資產淨值無關](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006319)」
- [財政部80年5月24日台財稅第800134552號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006613)：「[未上市股票高價低報者仍應取得證據補稅處罰](https://law-out.mof.gov.tw/LawContent.aspx?id=GL006613)」
- [財政部108年1月31日台財稅字第10704681060號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010580)：「[核釋個人匯回海外資金應否補報、計算及補繳基本稅額之認定原則及檢附文件規定](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010580)」
- [財政部75年7月12日台財稅第7526254號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007291)：「[使用統一發票之銷售額標準](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007291)」
- [財政部89年5月3日台財稅第0890452799號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007298)：「[營業性質特殊營業人之適用範圍](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007298)」
- [財政部114年12月12日台財稅字第11404664660號令](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382)：「[查定課徵營業人使用行動支付及多媒體資訊服務機適用租稅優惠作業規範](https://law-out.mof.gov.tw/LawContent.aspx?id=GL010382)」
- [財政部賦稅署75年4月10日台稅二發第7523166號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL009410)：「[餐飲業向顧客加收之服務費應列入銷售額課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL009410)」
- [財政部賦稅署75年6月28日台稅二發第7525151號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005811)：「[代理國外出版商招攬廣告之報酬不適用零稅率](https://law-out.mof.gov.tw/LawContent.aspx?id=GL005811)」
- [財政部賦稅署75年5月6日台稅二發第7546892號函](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007933)：「[收受政府補助款如非因銷售貨物勞務者不課稅](https://law-out.mof.gov.tw/LawContent.aspx?id=GL007933)」


---

#### 其他資料

##### 六、 其他說明資料 (問與答/網站/系統)

- [行政院114年11月14日院臺財字第1141031473號令](https://gazette.nat.gov.tw/egFront/eguploadpubWrapper?metaid=161522&file=/EG_FileManager/eguploadpub/eg031215/ch01/type1/gov01/num1/Eg.htm)
- [財政部臺北國稅局106年3月20日財北國稅審二字第1060007969號函](https://hunghuicheng.pixnet.net/blog/posts/11407316049)
- [住宅家電汰舊換新節能補助作業要點](https://law.moea.gov.tw/LawContent.aspx?id=GL001373#lawmenu)(經濟部)

---

- 中古汽、機車報廢或出口換購新車減徵退還新車貨物稅Q&A
- 購買電冰箱冷(暖)氣機除濕機退還減徵貨物稅稅額Q&A
- 經濟部能源署「住宅家電汰舊換新節能補助」網站申請問與答
- 統一發票兌獎多元服務管道疑義問答(Q&A)

---

# 封存