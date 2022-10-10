import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { BodyInjectorService } from "src/app/shared/service/body-injector.service";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";

@Injectable()

export class ModalService{
    
    constructor(
        private _bodyInjectorService: BodyInjectorService,
        private _viewContainerRef: ViewContainerRef){}

    public open(modalConfig: ModalConfig): ModalRef{
        //componente pode ser fabricado diretamento pela viewContainerRef
        const componentRef = this.createComponentRef();

        componentRef.instance.modalConfig = modalConfig;

        this._bodyInjectorService.stackBeforeAppRoot(componentRef);

        return new ModalRef(componentRef);
    }

    private createComponentRef(): ComponentRef<ModalComponent>{
        return this._viewContainerRef.createComponent(ModalComponent);
    }
}

export class ModalRef{
    constructor(private _componentRef: ComponentRef<ModalComponent>){}
    public close(): void{
        console.log('close called');
        this._componentRef.destroy();
    }
}
