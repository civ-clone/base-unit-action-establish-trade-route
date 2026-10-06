import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import TradeRouteEstablished from './Rules/TradeRouteEstablished';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

/** A Caravan (or any unit the ruleset allows) sets up a trade route from its home city to `city()`. What the route is worth, and where it is kept, is up to the `TradeRouteEstablished` rules. The unit is used up. */
export class EstablishTradeRoute extends Action {
  private _city: City;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this._city = city;
  }

  // `Action.forUnit` rebuilds an action from `(from, to, unit, ruleRegistry)`, which would put the `RuleRegistry` where
  // the `City` goes.
  forUnit(unit: Unit): EstablishTradeRoute {
    return new EstablishTradeRoute(
      this.from(),
      this.to(),
      unit,
      this._city,
      this.ruleRegistry()
    );
  }

  perform(): void {
    this.ruleRegistry().process(TradeRouteEstablished, this.unit(), this._city);

    this.unit().destroy();

    this.ruleRegistry().process(Moved, this.unit(), this);
  }
}

export default EstablishTradeRoute;
