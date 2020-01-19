# AppState

アプリのStateを管理するFunction。

内部保持するStateは下記の通り。

- `checkedPrefs`
- `populations`
- `chartData`
- `apiError`

## `checkedPrefs`

初回レンダリング時のみ実行される`useEffect`内部で`ResasApiService.prefectures`により取得された`Prefecture`配列から`Prefecture`と`checked`状態の組み合わせを生成しセットする。

`checkboxClickHandler`にて、個々の`checked`状態を切り替える。

### 例
```ts
[
    {
        prefecture: {
            prefCode: 1,
            prefName: "北海道",
        },
        checked: false,
    },
    {
        prefecture: {
            prefCode: 47,
            prefName: "沖縄県",
        },
        checked: false,
    },
]
```

## `populations`

`checkboxClickHandler`内で選択された都道府県の人口データを`ResasApiService.populationCompositionPerYear`で取得してセットする。

同関数内で選択が外された都道府県の人口データを削除する。

このStateが直接描画されることはないため、AppStateの戻り値には含まれない。

### 例
```ts
[
    {
        prefecture: {
            prefCode: 1,
            prefName: "北海道",
        },
        population: {
            boundaryYear: 2015,
            data: {
                label: "総人口",
                data: [
                    {
                        year: 2010,
                        value: 5506419,
                    },
                    {
                        year: 2015,
                        value: 5381733,
                    },
                ]
            }
        },
    },
]
```

## `chartData`

`PopulationChart`コンポーネントのPropsに渡すことができる型のState。

`populations`が更新されると実行される`useEffect`内で、`populations`を整形してセットする。

### 例
```ts
[
    {
        year: 2010,
        "北海道": 5506419,
        "沖縄県": 1392818,
    },
    {
        year: 2015,
        "北海道": 5381733,
        "沖縄県": 1433566,
    },
    {
        year: 2020,
        "北海道": 5216615,
        "沖縄県": 1459570,
    },
]
```

## `apiError`

`ResasApiService`の機能を利用する際に発生したエラーを保持する。