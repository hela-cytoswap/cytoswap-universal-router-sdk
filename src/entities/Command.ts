import { RoutePlanner } from '../utils/routerCommands'

export type TradeConfig = {
  allowRevert: boolean
}

export enum RouterTradeType {
  CytoswapTrade = 'CytoswapTrade',
  NFTTrade = 'NFTTrade',
  UnwrapWETH = 'UnwrapWETH',
}

// interface for entities that can be encoded as a Universal Router command
export interface Command {
  tradeType: RouterTradeType
  encode(planner: RoutePlanner, config: TradeConfig): void
}
