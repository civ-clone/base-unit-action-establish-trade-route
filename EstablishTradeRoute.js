"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishTradeRoute = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
const TradeRouteEstablished_1 = require("./Rules/TradeRouteEstablished");
/** A Caravan (or any unit the ruleset allows) sets up a trade route from its home city to `city()`. What the route is worth, and where it is kept, is up to the `TradeRouteEstablished` rules. The unit is used up. */
class EstablishTradeRoute extends Action_1.default {
    constructor(from, to, unit, city, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._city = city;
    }
    // `Action.forUnit` rebuilds an action from `(from, to, unit, ruleRegistry)`, which would put the `RuleRegistry` where
    // the `City` goes.
    forUnit(unit) {
        return new EstablishTradeRoute(this.from(), this.to(), unit, this._city, this.ruleRegistry());
    }
    perform() {
        this.ruleRegistry().process(TradeRouteEstablished_1.default, this.unit(), this._city);
        this.unit().destroy();
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.EstablishTradeRoute = EstablishTradeRoute;
exports.default = EstablishTradeRoute;
//# sourceMappingURL=EstablishTradeRoute.js.map