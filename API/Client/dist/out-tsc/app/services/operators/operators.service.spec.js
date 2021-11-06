import { TestBed } from '@angular/core/testing';
import { OperatorsService } from './operators.service';
describe('OperatorsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OperatorsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=operators.service.spec.js.map