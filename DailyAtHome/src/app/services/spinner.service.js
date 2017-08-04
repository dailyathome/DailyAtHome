"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var SpinnerService = (function () {
    function SpinnerService() {
        this.spinnerCounter = new BehaviorSubject_1.BehaviorSubject(0);
    }
    SpinnerService.prototype.displaySpinner = function (value) {
        var counter = value ? this.spinnerCounter.value + 1 : this.spinnerCounter.value - 1;
        this.spinnerCounter.next(counter);
    };
    SpinnerService = __decorate([
        core_1.Injectable()
    ], SpinnerService);
    return SpinnerService;
}());
exports.SpinnerService = SpinnerService;
//# sourceMappingURL=spinner.service.js.map