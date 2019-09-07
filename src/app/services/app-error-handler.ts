import { Injectable, ErrorHandler, Output, EventEmitter, Inject, Injector} from '@angular/core';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    time = 0;
    @Output() onErrorOccured = new EventEmitter();

    constructor(@Inject(Injector) private injector: Injector) {
        super();
        this.time = new Date().getTime();
    }

    handleError(error) {
        super.handleError(error);
        this.onErrorOccured.next(error);
    }

    getUniqueNumber() {
        return this.time;
    }

}