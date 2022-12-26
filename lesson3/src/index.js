import ('../style/style.scss');

import { drawGalleryItem } from './item';
import items from './items';

const galeryRootElement = document.getElementById('gallery');
items.map(item => galeryRootElement.appendChild(drawGalleryItem(item)));