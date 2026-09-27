---
title: iterm2
tags: []
date_created: 2026-06-27T17:51:42+08:00
date_modified: 2026-09-27T21:58:47+08:00
date: 2026-09-27
draft: false
status: 🌱 下種
---
^frontmatter

> [!table|para]
>> [!table|right|para]
>> 狀態：`INPUT[inlineSelect(option(🌱 下種), option(🪴 發展), option(👣 追蹤), option(🥾 交付), option(✅ 完成), option(🌲 常青), option(❌ 取消), showcase):status]`
>
> [up:: [[Public]]] [[#^current-note-path|目前位置]]

> [!right|para]
> 修改@`$=dv.span(dv.current().date_modified)`

[toc]
^this-table-of-contents

# 行動

## 為什麼推	iTerm2

在 macOS 的開發圈裡，工程師和進階用戶幾乎人人都推 **iTerm2**，用來徹底取代 Mac 內建的「終端機 (Terminal)」。

最主要的理由非常現實：**內建的終端機太過陽春，而 iTerm2 提供了滿滿的「生產力外掛級功能」**。尤其是當你搭配了剛剛裝好的 `SauceCodeProNerdFontMono` 等寬字體，iTerm2 能讓你的命令列體驗直接提升好幾個檔次。

它之所以被狂推，核心原因有以下幾個：

### 1. 畫面管理強大到不用切視窗

- **垂直/水平分頁 (Split Panes)**：按下 `Cmd + D`（左右分）或 `Cmd + Shift + D`（上下分），就能在同一個視窗裡切出無數個小區塊。你可以左邊跑自動化腳本、右邊用 ripgrep 搜檔案、下方看系統狀態，完全不用在好幾個視窗間切換到頭暈。
- **標籤頁 (Tabs)**：像瀏覽器一樣管理多個工作視脈絡。

### 2. 完美的 Nerd Font 與圖標支援

- 需另外安裝的 `Sauce Code Pro Nerd Font` 在 iTerm2 裡支援度極高。iTerm2 允許你將「純文字」與「非 ASCII 符號（如資料夾圖標、Git 分支圖示）」分開設定字體或完美對齊。搭配 [[#Oh My Zsh 終端機優化與 Tomorrow Night Eighties 配色完全指南|Oh My Zsh]] 之後，你的終端機提示字元可以變得超級漂亮且資訊豐富。

### 3. 神級功能：免滑鼠選取與標記

- **自動選取複製**：在 iTerm2 裡，你用滑鼠反白（選取）任何文字的「那一瞬間」，它就已經自動複製到你的剪貼簿了，不需要再按 `Cmd + C`。
- **自動補完歷史紀錄**：按下 `Cmd + Wait`（或直接使用 Zsh 插件），它會根據你過去輸入過的指令，在背景顯示灰色的預測文字，按一下方向鍵右鍵就直接填完。

### 4. 終端機內的「時光機」與搜尋

- **時間線 (Timewarp)**：按下 `Cmd + Alt + B`，你可以像看錄影帶一樣，倒帶觀看你幾分鐘前執行的指令輸出結果，非常適合用來檢查跑很快的 Log 紀錄。
- **強大的尋找功能**：`Cmd + F` 的搜尋支援正規表示式（Regex），找錯誤訊息極快。

### 5. 密碼與觸發器 (Triggers) 自動化

- 可以設定偵測到特定關鍵字（例如畫面出現 `Password:`），就自動觸發動作，甚至可以把常用的指令片段編成快速鍵。

> 💡 **一句話總結：**
>
> Mac 內建的終端機像是一枝普通的原子筆，而 **iTerm2 是一整套多功能的工程繪圖筆**。既然都要在命令列打滾、跑 Python 腳本或管理 Git，用 iTerm2 能讓你少點好幾次滑鼠，工作效率高出太多。

## Oh My Zsh 終端機優化與 Tomorrow Night Eighties 配色完全指南

本教學適用於全新或剛入手的 macOS 系統。我們將從零開始，逐步將原本單調的終端機，打造為具備自動補全、Git 狀態顯示，且擁有經典優雅 **Tomorrow Night Eighties** 配色的高效能工作環境。

### 1. 什麼是 Oh My Zsh？

macOS 預設的終端機環境（Shell）是 Zsh，雖然功能完整，但原生介面呆板且缺乏引導。

**Oh My Zsh** 是一個專為 Zsh 設計的開放原始碼社群框架。它能為你帶來以下核心好處：

- **視覺化狀態**：清晰顯示當前路徑，並以顏色或符號即時提示 Git 分支與版控狀態（例如是否有未提交的修改）。
- **智慧自動補全**：按 `Tab` 鍵時會出現選單式列表，可使用上下左右鍵移動選取，效率極高。
- **指令縮寫（Aliases）**：內建大量常用縮寫（如 `git status` 簡化為 `gst`，`ls -la` 簡化為 `ll`）。

### 2. 安裝 Oh My Zsh

在乾淨的 macOS 系統中，請打開內建的「終端機（Terminal）」應用程式，並執行以下步驟：

#### 步驟 1：執行安裝指令

請複製以下 `curl` 指令並貼進終端機中執行：

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### 步驟 2：設定權限

1. 安裝過程中，畫面會詢問 `Do you want to change your default shell to zsh? [Y/n]`，請輸入 **`y`** 並按 Enter。
2. 接著系統會要求輸入 **Mac 的開機密碼**（注意：輸入密碼時畫面上不會顯示任何星號或文字，這是正常的安全機制，請直接盲打完並按 Enter）。
3. 當畫面上出現彩色的 **"Oh My Zsh!"** 字樣時，即代表安裝成功。

### 3. 下載與安裝 Nerd Fonts 字體（必備步驟）

當你開始進階客製化 Zsh 的主題時，許多主題會使用特殊的圖示（如 Git 的分支符號 、資料夾圖示等）。如果沒有安裝對應的字體，終端機將會出現**亂碼或問號框框**。

因此，強烈建議安裝專為工程師設計的 **Nerd Fonts**。

#### 步驟 1：下載字體

1. 用 Homebrew 安裝 **SauceCodePro Nerd Font Mono**
	```shell
	brew install --cask font-sauce-code-pro-nerd-font
	```


#### 步驟 2：修改終端機字體設定

後續不論你使用內建 Terminal 或 iTerm2，都必須至設定中調整字體：

- **內建 Terminal**：按 `Cmd +,` -> 描述檔 -> 點選「文字」分頁 -> 在「字體」區塊點擊變更，選擇剛剛安裝的 **SauceCodePro Nerd Font Mono**。
- **iTerm2**：按 `Cmd + i` -> Profiles -> Text -> 在 Font 區塊勾選 **Use a different font**，並選擇 **SauceCodePro Nerd Font Mono**。

### 4. 安裝 Tomorrow Night Eighties 配色主題

Oh My Zsh 負責管理文字外觀與版面，而真正決定「顏色飽和度與色調」的是終端機軟體本身。**Tomorrow Night Eighties** 是一款帶有溫柔復古感、低對比且不易疲勞的經典灰底粉色調配色。

原作者 Chris Kempson 的開源專案中已針對 macOS 各工具做好設定，請依照你使用的軟體進行配置：

#### 方案 A：macOS 內建 Terminal（系統原生）

在早期的版本中，原作者將此目錄命名為 `OS X Terminal`，它適用於現在的 macOS。

1. **下載設定檔**：打開瀏覽器前往 [GitHub 官方設定檔](https://github.com/chriskempson/tomorrow-theme/blob/master/OS%20X%20Terminal/Tomorrow%20Night%20Eighties.terminal)。在網頁空白處點擊**右鍵 -> 另存新檔**（儲存檔名為 `Tomorrow Night Eighties.terminal`）。
2. **匯入系統**：開啟內建 Terminal，按 `Cmd +,` 進入設定，切換至「**描述檔 (Profiles)**」標籤頁。
3. **啟用主題**：點擊左側列表最下方的 **「...」齒輪圖示** -> 選擇 **匯入 (Import)**，並選取剛下載的檔案。
4. 匯入後，點選左側名單中的 `Tomorrow Night Eighties`，並點擊下方的「**預設 (Default)**」，讓以後開啟的新視窗均以此配色渲染。

#### 方案 B：iTerm2（第三方強力推薦終端機）

如果你有額外安裝 iTerm2，它所使用的格式為 `.itermcolors`。

1. **下載設定檔**：打開瀏覽器前往 [GitHub iTerm2 官方設定檔](https://www.google.com/search?q=https://raw.githubusercontent.com/chriskempson/tomorrow-theme/master/iTerm2/Tomorrow%2520Night%2520Eighties.itermcolors)。在網頁空白處點擊**右鍵 -> 另存新檔**（儲存檔名為 `Tomorrow Night Eighties.itermcolors`）。
2. **匯入軟體**：打開 iTerm2，按快速鍵 `Cmd + i`（或由選單進入 Preferences -> Profiles -> Colors）。
3. **啟用主題**：點擊右下角的 **Color Presets...** 下拉選單 -> 選擇 **Import** 並匯入剛下載的檔案。成功後再次點開 **Color Presets...**，勾選 **Tomorrow Night Eighties** 即刻套用。

### 5. 常用高效率外掛推薦（自由選配）

完成上述基礎工程後，你可以手動將以下兩款最熱門的外掛加進你的 Zsh 中，能大幅提升打字與搜尋效率：

1. **zsh-autosuggestions（歷史指令智慧提示）**：
	根據你過去輸入過的指令，自動在游標後方顯示灰色預測文字，按 `→` 鍵即可直接自動補齊。
	```shell
	git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
	```
2. **zsh-syntax-highlighting（語法高亮）**：
	在按下 Enter 執行前，打對的指令會顯示綠色，打錯的指令會顯示紅色，提供即時防呆。
	```shell
	git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
	```
3. 修改 Zsh 的設定檔（`.zshrc`）
	```shell
	subl ~/.zshrc
	```
	按 `i` 進入編輯模式，在括號內**加入 `zsh-syntax-highlighting`**。修改後看起來長這樣：
	```text
	plugins=(
		git
		zsh-autosuggestions
		zsh-syntax-highlighting
	)
	```
	(注意：多個外掛之間用「空白」或「換行」隔開即可，不需要加逗號)
	修改完後，按下 `Esc` 退出編輯模式，接著輸入 `:wq` 並按 Enter 儲存離開。
	執行以下指令更新設定，或者直接關掉終端機重新打開：
	```shell
	source ~/.zshrc
	```

> **完成結語**：
>
> 當你配置好 **Oh My Zsh** 的骨架、安裝好 **Nerd Font** 圖示字體、並套用 **Tomorrow Night Eighties** 專屬調色盤後，你的終端機將兼具視覺美感與極致的實用生產力。

[[iterm2#^frontmatter|top]]

# 構思

[[iterm2#^frontmatter|top]]

# 封存

```dataviewjs
await dv.view("Extra/Scripts/get_path");
```
^current-note-path

[[iterm2#^frontmatter|top]]