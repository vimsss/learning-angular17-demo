import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentCommunicationComponent } from './child-parent-communication.component';

describe('ChildParentCommunicationComponent', () => {
  let component: ChildParentCommunicationComponent;
  let fixture: ComponentFixture<ChildParentCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildParentCommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildParentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
