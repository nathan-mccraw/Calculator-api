import { TestBed } from '@angular/core/testing';
import { CalculateService } from './calculate.service';
describe('CalculateService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculateService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=calculate.service.spec.js.map