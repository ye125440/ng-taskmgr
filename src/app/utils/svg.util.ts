import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResource = (ir: MdIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('list', ds.bypassSecurityTrustResourceUrl('assets/Viewlist.svg'))
};
