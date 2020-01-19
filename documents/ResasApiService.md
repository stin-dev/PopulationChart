# ResasApiError

RESAS APIへのアクセスが失敗した場合にスローされる例外クラス。

## プロパティ

### statusCode

ステータスコード(404, 429など)。

### description

エラーの説明。

# ResasApiService

[RESAS API](https://opendata.resas-portal.go.jp/)にアクセスする機能を提供する。

RESAS API keyをコンストラクタに渡してインスタンスを生成する。

## プロパティ

### endpoint (private)

RESAS APIのエンドポイント。

### apiKey (private)

RESAS API key。コンストラクタでクラス利用者から受け取る。

## メソッド

### get

`fetch`を用いてRESAS APIにアクセスする。
レスポンスのステータスが400番台、500番台の場合、適切なプロパティを設定した`ResasApiError`をスローする。

#### params
- `apiPath: string`
- `params?: URLSearchParams`

#### return
- `Promise<any>`

### prefectures

https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html

都道府県一覧を取得する。

具体的な処理は`ResasApiService.get`に委譲する。

#### return
- `Promise<Prefecture[]>`

### populationCompositionPerYear

https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html

地域単位、年単位の人口構成のデータを取得する。

パラメーターからURLSearchParamsインスタンスを構成する。具体的な処理は`ResasApiService.get`に委譲する。

#### params
- `prefCode: number`
- `cityCode: string = "-"`
- `addArea?: { prefCode: number, cityCode?: string }[]`

#### return
- `Promise<Population>`