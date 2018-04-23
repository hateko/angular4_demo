// 导入自定义字体图标
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('gift', ds.bypassSecurityTrustResourceUrl('assets/partner.svg'));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/day.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/week.svg'));
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl('assets/partner.svg'));
};
