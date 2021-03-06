import {Component,Input,ViewChild} from '@angular/core';
@Component({
    selector:'my-code',
    template:`
        <div class="rel" *ngIf="_code;else another">
            <p>
                <em #tip="ngzTooltip"  (copyComplete)="complete()" 
                      [ngz-clickCopy]="_code" [ngz-tooltip]="copyState"
                       class="abs-tr wash-p">Copy</em>
            </p>
            <ng-template #tip>
                <div>{{copyState}}</div>
            </ng-template>
            <pre [useIndex]="useIndex" [highlight]="_code" [language]="type"></pre>
        </div>
        <ng-template #another>
            <h3 class="center m-2 color-d">
                nobady
            </h3>
        </ng-template>
    `
})
export class CodeComponent{
    @Input()useIndex:boolean;
    copyState:string='Copy to clipboard';

    _code:string;
    type:string;
    @ViewChild('tip')tip:any;
    complete(){
        console.log('com');
        this.tip.onceShow('Copied!')
    }
    @Input()set js(val:string){
        this.type='js';
        this._code=val;
    }
    @Input()set html(val:string){
        this.type='html'
        this._code=val;
    }
}

