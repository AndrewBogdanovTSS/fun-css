export interface Responsive<T = string> {
  sm: T
  md?: T
  lg?: T
}

interface Item {
  type: string
  area: Responsive
  payload: {
    color: Responsive
  }
}

export interface Section {
  layout: {
    cols: Responsive
    rows: Responsive
    height: Responsive
  }
  items: Item[]
}
