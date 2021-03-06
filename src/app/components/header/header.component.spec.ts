import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

import { HeaderComponent } from './header.component';
import { SearchboxComponent } from '../searchbox/searchbox.component';

describe('component: HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchboxComponent,
        HeaderComponent
      ],
      imports: [
        FormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
  });

  it('should be created.', () => {
    expect(component).toBeTruthy();
  });
});
