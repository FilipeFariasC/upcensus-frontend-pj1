import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoUploadComponent } from './arquivo-upload.component';

describe('ArquivoUploadComponent', () => {
  let component: ArquivoUploadComponent;
  let fixture: ComponentFixture<ArquivoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivoUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
