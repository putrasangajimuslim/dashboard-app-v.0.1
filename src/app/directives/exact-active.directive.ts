import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appExactActive]',
  standalone: true
})
export class ExactActiveDirective implements OnInit, OnDestroy {
  @Input('appExactActive') link !: string;
  private sub?: Subscription;

  constructor(
    private router: Router,
    private el: ElementRef,
    private rd: Renderer2
  ) { }

  ngOnInit(): void {
    this.toggleActive(this.router.url);

    this.sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.toggleActive(event.urlAfterRedirects);
        }
    });
  }

  private toggleActive(currentUrl: string) {
    const active = this.router.isActive(this.link, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
    
    if (active) {
      this.rd.addClass(this.el.nativeElement, 'active');
    } else {
      this.rd.removeClass(this.el.nativeElement, 'active');
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
