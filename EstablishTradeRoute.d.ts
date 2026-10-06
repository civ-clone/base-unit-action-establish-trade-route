import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
/** A Caravan (or any unit the ruleset allows) sets up a trade route from its home city to `city()`. What the route is worth, and where it is kept, is up to the `TradeRouteEstablished` rules. The unit is used up. */
export declare class EstablishTradeRoute extends Action {
  private _city;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    ruleRegistry?: RuleRegistry
  );
  forUnit(unit: Unit): EstablishTradeRoute;
  perform(): void;
}
export default EstablishTradeRoute;
