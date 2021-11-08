import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
describe('TableComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=table.component.spec.js.map