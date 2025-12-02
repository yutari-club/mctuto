# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは、MakeCode for Minecraft を使用した教育用チュートリアルおよびプログラミング学習教材のリポジトリです。TypeScriptベースのMinecraft Educationでのプログラミング学習を支援します。

## 開発言語・技術スタック

- **言語**: TypeScript（ES5ターゲット）
- **プラットフォーム**: MakeCode for Minecraft
- **対象**: Minecraft Education Edition
- **Webサイト**: Jekyll（GitHub Pages）
- **テーマ**: jekyll-theme-hacker

## プロジェクト構成

### 主要ファイル

- `main.ts` - メインのプログラムファイル（現在空）
- `test.ts` - テストファイル（現在コメント1行のみ）
- `pxt.json` - MakeCodeプロジェクトの設定ファイル（240個のチュートリアルファイルを含む）
- `tsconfig.json` - TypeScript設定（ES5ターゲット、noImplicitAny有効）
- `_config.yml` - Jekyll設定ファイル（GitHub Pages用）
- `index.md` - メインページ（4つのゲーミフィケーション世界へのリンク）

### ディレクトリ構造

1. **`block/`** - ブロックプログラミング用の教材
   - `world00/` - 基本的なチュートリアル（ChickenRain、FlowerTrail）
   - `world01/` - 動物保護：基本的なプログラミング学習（エージェント移動、ブロック操作、6レベル）
   - `world02/` - 惑星探索：中級プログラミング学習（データ収集、分析、6レベル）
   - `world03/` - タイムトラベル：上級プログラミング学習（カスタムブロック、6レベル）
   - `world04/` - AI・機械学習関連（Pattern Recognition、Terrain Mapping、Sustainable Farming、Ocean Observations、Water Quality）

2. **`python/`** - Pythonプログラミング教材
   - `lesson1/` ～ `lesson10/` - 段階的な学習教材（各レッスンに複数のアクティビティ）

3. **`_locales/ja/`** - 日本語ローカライゼーション
   - `mctuto-strings.json` - UI文字列の日本語訳
   - `mctuto-jsdoc-strings.json` - JSDocコメントの日本語訳

4. **`_site/`** - Jekyll生成された静的サイト（自動生成、編集不要）

5. **`curriculum/`** - 段階的プログラミング学習教材
   - `06-01_sequence/` - エージェント移動、迷路構築、オセロット囲い（12ファイル）
   - `06-02_conditionals/` - 条件文、while ループ、再帰ピラミッド（12ファイル）
   - `06-03_variables/` - メガジャンプ、コウモリ洞窟、文字表示（15ファイル）
   - `06-04_while_loops/` - エージェント破壊、橋建設、螺旋アクティビティ（12ファイル）
   - `06-05_for_loops/` - Forループ学習（12ファイル）
   - `06-06_functions/` - 関数学習（12ファイル）
   - `06-07_events/` - イベント処理学習（12ファイル）
   
   各シリーズには以下の難易度レベルが含まれます：
   - `novice/` - 初心者向け（3ファイル：blocks, javascript, python）
   - `intermediate/` - 中級者向け（3ファイル）
   - `expert/` - 上級者向け（3または6ファイル）
   - `application/` - 応用編（3ファイル）

### カスタムブロック

1. **`block/world03/customBlocks/custom.ts`**
   - 基本的なカスタムブロック（柱状クォーツブロック破壊イベント）

2. **`block/world04/customBlocks/AIBlocks.ts`**
   - AI・機械学習関連のカスタムブロック
   - 4つの主要な名前空間:
     - `Input` - データ入力（センサーデータ、画像データ、水質データ等）
     - `Datasets` - データセット管理（historical, current, live）
     - `AI` - 機械学習アルゴリズム（supervised, unsupervised, semi-supervised）
     - `Output` - 結果出力（位置特定、分析結果）

## 翻訳作業の進捗

### Curriculum（カリキュラム）
- ✅ **06-01_sequence** - 12ファイル（100%）
- ✅ **06-02_conditionals** - 12ファイル（100%）
- ✅ **06-03_variables** - 15ファイル（100%）
- ✅ **06-04_while_loops** - 12ファイル（100%）
- ✅ **06-05_for_loops** - 12ファイル（100%）
- ✅ **06-06_functions** - 12ファイル（100%）
- ✅ **06-07_events** - 12ファイル（100%）

**カリキュラム合計**: 87/87ファイル完了（100%）

### Block（ブロックプログラミング）
- ✅ **world04 AI教材** - PatternRecognition, MappingTerrain, SustainableFarming, OceanObservations, WaterQuality（完了）
- ✅ **world04/customBlocks/AIBlocks.ts** - カスタムブロックの`//% block=`コメント翻訳完了

### Python（Pythonプログラミング）
- ✅ **lesson1-10** - 全レッスン・全アクティビティ（100%）
  - タイトル、ステップ説明、tutorialhint、テンプレートコメントすべて翻訳完了
  - 合計50+ファイル

**全体**: すべての教材が小学生向けふりがな付き日本語に翻訳済み

## 開発コマンド

### MakeCode関連
MakeCode for Minecraftプロジェクトの性質上、特別なビルドコマンドはありません。MakeCodeエディタでの編集・実行が基本です。

### Jekyll（GitHub Pages）関連
```bash
# ローカルでJekyllサイトをビルド・プレビュー
bundle install    # 初回のみ：依存関係をインストール
bundle exec jekyll serve    # ローカルサーバーを起動（http://localhost:4000）
bundle exec jekyll build    # 静的サイトを_siteディレクトリにビルド
```

### ファイル検索・編集時のコツ
```bash
# 特定のチュートリアルファイルを検索
find . -name "*.md" | grep "activity_1"

# 翻訳が必要なファイルを検索
find . -name "*.md" | grep -E "(world0[1-4]|curriculum)" | head -10

# 複数のマークダウンファイルを一括編集する場合
find ./curriculum -name "*.md" | head -5 | xargs ls -la
```

## 開発時の注意事項

1. **言語設定**: このプロジェクトは日本語をメインとしています
2. **コメント**: 日本語でコメントを記述
3. **カスタムブロック**: 新しいカスタムブロックを作成する際は、適切な名前空間と色分けを使用
4. **AI関連機能**: World04のAIブロックは教育目的のため、実際の機械学習実装ではなく、概念学習用のシミュレーション

## 翻訳・意訳のルール

### 対象読者
- **小学生を主な対象とした教育用教材**
- 小学生が理解しやすい日本語での説明を心がける

### 翻訳の基本方針
1. **平易な日本語**: 小学生でも理解できる分かりやすい言葉を使用
2. **専門用語の扱い**:
   - **マインクラフト用語**: 翻訳のみ（意訳不要）
     - `agent` → 「エージェント」
     - `block` → 「ブロック」
     - `teleport` → 「テレポート」
   - **プログラミング用語**: 翻訳のみ（意訳不要）
     - `variable` → 「変数」
     - `function` → 「関数」
     - `loop` → 「ループ」
   - **IT用語**: 翻訳のみ（意訳不要）
     - `code` → 「コード」
     - `parameter` → 「パラメータ」
     - `coordinate` → 「座標」

### 文体・表現のルール
1. **文体**: 
   - 敬語は使わず、丁寧でわかりやすい表現
   - 「〜します」「〜してください」の現在形
   - 小学生に話しかけるような親しみやすい文体

2. **表現の工夫**:
   - 難しい漢字にはひらがなを併用
   - 一文を短く、分かりやすく
   - 具体的な例を交えた説明

3. **構造の維持**:
   - ステップ番号「## ステップ 1」形式は維持
   - コードブロックは変更せず、説明のみ翻訳
   - **太字**の重要な値は維持

### 翻訳例
- 「Get a chat command」 → 「チャットコマンドを取得します」
- 「Drag it to the workspace」 → 「それをワークスペースにドラッグします」
- 「Set the parameter to 5」 → 「パラメータを5に設定します」
- 「The agent will move forward」 → 「エージェントが前に進みます」

### テンプレートコメントの翻訳パターン
- `//Replace the lines below with your code #` → `//下(した)の行(ぎょう)をあなたのコードに置(お)き換(か)えてね #`
- `//Make the Agent move forward` → `//エージェントを前(まえ)に動(うご)かす`
- `//for loop set to 5` → `//forループを5に設定(せってい)`
- `//if conditional with Agent detect condition` → `//if条件(じょうけん)文(ぶん)とエージェント検知(けんち)条件(じょうけん)`

### Gitコミットメッセージのパターン
翻訳作業のコミットメッセージは以下のフォーマットを使用：
```
[対象範囲]: [作業内容]

- [詳細1]
- [詳細2]

小学生向けにふりがな付きでわかりやすい日本語に翻訳

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

例：
```
python lesson6とlesson9: 残りの未翻訳部分を完全に日本語化

lesson6:
- activity1.md: テンプレートコメントを翻訳
- activity2.md: テンプレートコメントを翻訳

lesson9:
- activity1.md: テンプレートコメントを翻訳
- activity2.md: タイトル、ステップ説明、tutorialhintを翻訳
- activity3.md: タイトル、ステップ説明を翻訳

小学生向けにふりがな付きでわかりやすい日本語に翻訳

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## カスタムブロックの開発パターン

- `//% block="ブロック名"` - ブロック表示名の指定
- `//% color="#色コード"` - 名前空間の色指定
- `//% handlerStatement=1` - イベントハンドラーブロック
- `//% weight=数値` - ブロックの表示順序

## 教材の特徴

- **段階的学習**: 初心者から上級者まで対応
- **実践的**: Minecraft内での実際のプログラミング体験
- **多言語対応**: 英語・日本語対応
- **AI教育**: 基本的な機械学習概念の学習支援

## プロジェクトのアーキテクチャ理解

### MakeCodeプロジェクト構造
- **pxt.json**: 240個のチュートリアルファイルが登録されており、MakeCodeエディタでアクセス可能
- **カスタムブロック**: `block/world03/` と `block/world04/` にTypeScriptで実装
- **多言語対応**: `_locales/ja/` でUI文字列とドキュメントの日本語化

### Jekyll サイト構造
- **GitHub Pages**: 自動的にJekyllでビルドされ、Webサイトとして公開
- **テーマ**: hacker テーマを使用してプログラミング教材らしい見た目
- **ナビゲーション**: index.mdから各world（世界）へのリンク構造

### 教材の階層構造
1. **世界（World）**: テーマ別の大きなカテゴリ
2. **レベル（Level）**: 各世界内での段階的学習
3. **アクティビティ**: 具体的なプログラミング課題
4. **難易度**: novice → intermediate → expert → application