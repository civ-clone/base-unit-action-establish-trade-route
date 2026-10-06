import City from '@civ-clone/core-city/City';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';
/** Processed when `Unit` sets up a trade route to `City`, before the unit is used up. */
export declare class TradeRouteEstablished extends Rule<[Unit, City], void> {}
export default TradeRouteEstablished;
