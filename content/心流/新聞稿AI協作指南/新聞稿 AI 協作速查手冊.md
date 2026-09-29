---
title: "[速查]新聞稿 AI 協作速查手冊"
date_created: 2026-09-18T14:13:54+08:00
date_modified: 2026-09-29T15:22:34+08:00
date: 2026-09-27
draft: false
share_link: https://share.note.sx/leohu77r
share_updated: 2026-09-27T21:38:18+08:00
---

# 新聞稿 AI 協作速查手冊

[簡報](https://eumenr.github.io/reservoir/Extra/Slides%20Extended/index_新聞稿%20AI%20協作指南.html)

---

[TOC]

- [[新聞稿 AI 協作指南簡報]]([簡報](https://eumenr.github.io/reservoir/Extra/Slides%20Extended/index_新聞稿%20AI%20協作指南.html))
- [[新聞稿 AI 協作與自動化工具]]
- [[新聞稿 AI 協作速查手冊]]

---

## 1. 核心原則與責任邊界
- **工具入口**：[Gemini Notebook 官網入口](https://notebook.google.com/?pli=1)
- **AI 工具定位**：複製臺北國稅局近 2 年公務口吻與行文結構，並參考其他區局營業稅選題（起草助理）。
- **人工責任邊界**：法條條號、項次、適用要件、金額與裁罰倍數，**AI 僅作為新聞稿起草輔助工具，提供之資料及來源引註僅供撰稿參考，不代表 AI 已完成法規查核。AI來源引註 ≠ 法規查核**。

---

## 2. 步驟一：準備寫作素材與法規來源

|資料|用途|
|--|--|
|臺北國稅局奉核稿|學習口吻、結構、敘事方式|
|其他區局新聞稿|選題、標題、案例方向參考|
|法規／函釋來源|提供撰稿參考及來源回溯|
- **內網公用區路徑**：`\\stsarw00\公用區\銷售稅組\單位內部傳遞\新聞稿及會稿\00.新聞稿`
- **請複製以下 md 檔案至本機電腦備用**：
	1. 本組奉核之新聞稿如下檔案，標籤命名為「`臺北國稅局奉核版`」
		1. `tax_news_臺北國稅局_111年.md`
		2. `tax_news_臺北國稅局_112年.md`
		3. `tax_news_臺北國稅局_113年.md`
		4. `tax_news_臺北國稅局_114年.md`（模仿從114年2月1日至目前結構與口氣）
		5. `tax_news_臺北國稅局_115年.md`（最新奉核稿件請自行增加）
	2. 其他區局官網發布之新聞稿（選題與標題風格參考），標籤命名為「`其他區局新聞稿連結`」
	> [!info] 連結
	> ```
	> https://www.ntbk.gov.tw/multiplehtml/8edee6a2f90d4254a5e8d38c1db38137
	> https://www.ntbna.gov.tw/multiplehtml/374fe8c4b18e48c691a6806ac02b9984
	> https://www.ntbca.gov.tw/multiplehtml/3c844e426e9c4b5ebcaaa18694d7e230
	> https://www.ntbsa.gov.tw/multiplehtml/5e0e49a811b74b50b5a6486d38374285
	> ```
- 複製以下**相關法規連結**匯入Source，標籤命名為「`相關法規連結`」：
	 包括[全國法規資料庫](https://law.moj.gov.tw/Index.aspx)(法律)、[財政部主管法規查詢系統](https://law-out.mof.gov.tw)(法規及解釋函令)、[財政部各稅法令函釋檢索系統](https://ttc.mof.gov.tw)(完整解釋函令，包括以往年度的法令彙編)，請注意，**Gemini Notebook 不會因原始 URL 更新而自動重新讀取。**
	- 按歷史依據法規引用及股別分成三大類，解釋函令請自查後匯入
	  > [!info]- 營業稅股
	  > ```
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340081
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340082
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340083
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340085
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340087
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110002
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110023
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340040
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=FL041411
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=GL010529
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=GL009478
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=GL011639
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=FL006095
	  > ```

	  > [!info]- 特種消費稅股
	  > ```
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330010
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070021
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0330022
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340017
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340140
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340153
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340078
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=FL006080
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340072
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030055
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080
	  > ```

	  > [!info]- 查緝股
	  > ```
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340040
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340115
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340051
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340080
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340081
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340082
	  > https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340087
	  > https://law-out.mof.gov.tw/LawContent.aspx?id=FL006015
	  > ```

---

## 3. 步驟二：筆記本建立與拖曳上傳
1. 開啟 [Gemini Notebook](https://notebook.google.com/?pli=1) 網站，點選「新建筆記本」，命名為：`國稅新聞稿撰寫專區`。
2. 將複製好的 `.md` 檔案，直接**拖曳拉入**左側「來源（Sources）」窗格。
3. **資料盤點驗證**：於下方聊天框輸入以下提問，確認資料已正確載入。
```
請列出勾選來源檔案涵蓋部分：
- 是否每篇都有標題
- 是否每篇都有發布日期
- 是否有明顯缺漏
- 請列出實際讀取到的篇數及最早／最晚發布日期；不要推測未提供的資料。
```

> [!info]- 資料版本紀錄／最後更新日期：
> v2026-09-18(5)T145725
> **資料最後更新：115年9月18日**
> 臺北國稅局111～115年新聞稿均已匯入，115年目前共56篇
> ```
> 已完成：00.新聞稿\tax_news_臺北國稅局_111年.md （共處理 36 件中文新聞稿）
> 已完成：00.新聞稿\tax_news_臺北國稅局_112年.md （共處理 53 件中文新聞稿）
> 已完成：00.新聞稿\tax_news_臺北國稅局_113年.md （共處理 57 件中文新聞稿）
> 已完成：00.新聞稿\tax_news_臺北國稅局_114年.md （共處理 71 件中文新聞稿）
> 已完成：00.新聞稿\tax_news_臺北國稅局_115年.md （共處理 56 件中文新聞稿）
> ```

---

## 4. 步驟三：實用提問 Prompt 複製區

> **提示**：複製下方框內完整文字，修改篇數和月份後，直接貼入 Gemini Notebook 聊天框發問。
> ps. 按長官要求，語氣結構等應參採 114年2月以後發布之新聞稿。
> [[新聞稿 AI 協作與自動化工具#提問產製新聞稿|提問產製新聞稿]]

```
【系統時空設定】目前時間點為民國 115 年 10 月。
【目標設定】
- 目標稅目：營業稅
- 目標月份：115年10月
- 產出數量：3 篇

【執行規則】
1. 標題與主題：
	- 【選題強制分散】優先避免 3 篇均集中於同一來源檔案。如無適當題材，不得為滿足來源分散而硬選不相關或不適用題材。
	- 「主題」係指主要稅務議題、適用對象及核心法令均高度相同之內容，不以標題文字不同即視為不同主題。
	- 絕對不可採用 113年10月至115年10月 期間出現過的任何臺北國稅局新聞稿標題與主題。
	- 3 篇彼此之間的標題必須完全相異。
2. 結構與用詞：參考臺北國稅局近 2 年（即 114 年 2 月以後發布者）同類型新聞稿的段落結構、公務用語及法條引述口氣。不要寫聯絡人那一段。
3. 關於數字與日期：
	- 舉例之金額除依法條規定外，不得和原發布版本相同，盡量以整數為例（如 10 萬、200 萬等），且雙方約定金額（如房屋款與土地款）盡量不要相同。
	- 【重要】案例日期不得沿用原稿日期，原則上固定設定於目標月份前幾期；交易日期、進銷貨日期或發票期別，請使用「115 年 5-6 月」或「115 年 7-8 月」等指定期間。
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
[重複上述格式輸出第 2 篇、第 3 篇......]
```

### 常用修稿與調校指令

#### ① 標題／主題重選

```markdown
請重新檢查本稿標題及核心主題是否與「臺北國稅局」近2年新聞稿重複或高度相似。

注意：
1. 「主題」不得僅以標題文字不同判定，應比較主要稅務議題、適用對象及核心法令。
2. 如與既有稿件高度相似，請重新參考其他區局新聞稿來源尋找不同題材。
3. 不得只更換標題而保留相同核心主題。
4. 不得為了強制分散來源而選擇與營業稅無關或不適合本局發布的題材。
5. 重新產出完整新聞稿，不要說明修改過程。
```

#### ② 臺北國稅局語氣／結構調整

```markdown
請重新檢視本稿，參考臺北國稅局114年2月以後發布之同類型新聞稿，調整段落結構、公務用語、敘事方式及法條引述口氣。

要求：
1. 保留本稿原有稅務議題及法律邏輯。
2. 不得直接複製參考新聞稿的句子、案例或數字。
3. 避免口語化、教科書式或明顯AI生成語氣。
4. 不要加入臺北國稅局新聞稿通常沒有的說明性小標題。
5. 不要寫聯絡人段落。
6. 僅輸出修改後的完整新聞稿。
```

#### ③ 法規及來源引註檢查

```markdown
請重新檢查本稿所有法規、法條、項次、款次、適用要件及具體法規事實的引用。

請逐句檢查：
1. 是否確實可以由目前 Notebook 的來源資料支持。
2. 是否有引用來源不足、來源不明或無法由來源確認的內容。
3. 每一個論述法規條文、法律要件或具體法規事實的句子，句末是否都有正確的 Gemini Notebook 來源標號 [1]、[2]。
4. 不得自行補造來源標號。
5. 不得因為新聞稿舊稿曾經引用某條法規，就直接認定該條文目前仍適用。
6. 無法由來源確認的內容，請標示「【待人工查核】」，不得自行猜測或補寫。

檢查完成後，重新輸出完整新聞稿。
```

#### ④ 金額／日期／期別檢查

```markdown
請重新檢查本稿所有案例中的金額、日期、發票期別、稅額及計算邏輯。

要求：
1. 案例日期不得沿用原新聞稿日期。
2. 案例日期依原Prompt規則設定於目標月份前幾期，不得自行改成目標月份。
3. 案例金額原則上使用清楚的整數。
4. 除依法規固定規定之金額外，不得直接沿用原新聞稿案例金額。
5. 同一案例中不同標的之約定金額應避免相同。
6. 涉及營業稅計算時，請依該案例適用之稅率及計算方式重新列式驗算含稅、未稅、銷項稅額及應納稅額之邏輯。
7. 發票期別須與案例日期相互一致。
8. 若計算結果或日期邏輯無法確認，請標示「【待人工查核】」，不得自行猜測。

檢查完成後，重新輸出完整新聞稿。
```

#### ⑤ 最終規則重整

```markdown
請依照本次最初提供的完整Prompt規則，重新檢查目前新聞稿。

請特別檢查：
- 目標稅目是否為營業稅
- 目標月份是否正確
- 產出篇數是否正確
- 各篇標題是否完全不同
- 各篇核心主題是否高度重複
- 是否與臺北國稅局近2年新聞稿標題或主題重複
- 引用來源是否確實支持所引用的內容
- 是否誤帶入其他區局之機關名稱、地區、承辦單位或聯絡資訊
- 是否沿用舊稿日期
- 是否沿用舊稿案例金額
- 案例日期及發票期別是否符合本次Prompt規定
- 是否有「【待人工查核】」標示需要注意的內容
- 輸出格式是否符合指定Markdown格式

如發現問題，直接修正；無法確認的內容標示「【待人工查核】」。
最後僅輸出修正後的完整新聞稿，不要輸出檢查報告、修改說明或前言。
```

## 5. 附錄

[Google Colab](https://colab.research.google.com) Python Code:
![[新聞稿 AI 協作與自動化工具#^web-scraper]]