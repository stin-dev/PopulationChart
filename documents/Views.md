# PrefCheckBox

都道府県を選択するためのFunctionComponent。

チェック状態によって付与するクラスを加減することで背景色と文字色を変更する。

## Props
- `className?: string`
- `checked: boolean`
- `prefName: string`
- `onClick: () => void`

# PopulationChart

グラフ描画ライブラリ`recharts`を使用。

props経由で渡されたデータから人口推移グラフを描画するFunctionComponent。

## Props
- `data: ChartData[]`

# App

メインのコンポーネント。
AppState.tsに依存する。

PrefCheckBoxをレスポンシブに整列するために、[Material UI](https://material-ui.com/)の[Grid](https://material-ui.com/components/grid/)を使用している。
