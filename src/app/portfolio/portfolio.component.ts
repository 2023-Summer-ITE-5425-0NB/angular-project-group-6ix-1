import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private router: Router, private portfolioService: PortfolioService) { }

  // jsonData = [
  //   {
  //     "name":"Guernica",
  //     "imageLocation":"../assets/portfolio1.jpg",
  //     "description":" Picasso painted Guernica at his home in Paris in response to the 26 April 1937 bombing of Guernica, a Basque Country town in northern Spain which was bombed by Nazi Germany and Fascist Italy at the request of the Spanish Nationalists. Upon completion, Guernica was exhibited at the Spanish display at the 1937 Paris International Exposition, and then at other venues around the world. The touring exhibition was used to raise funds for Spanish war relief. The painting soon became famous and widely acclaimed, and it helped bring worldwide attention to the Spanish Civil War."
  //        },
  //    {
  //        "name":"La Mancha Roja",
  //        "imageLocation":"../assets/portfolio2.jpg",
  //        "description":"La Mancha Roja is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, The Starry Night is one of the most recognized paintings in Western art."
  //       },
  //       {
  //        "name":"Guerrilla",
  //        "imageLocation":"../assets/portfolio3.jpg",
  //        "description":"Guerrilla is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring."
  //       },
  //       {
  //        "name":"Vinigrette",
  //        "imageLocation":"../assets/portfolio4.jpg",
  //        "description":" Vinigrette (French: Un dimanche après-midi ) was painted from 1884 to 1886 and is Georges Seurat's most famous work. A leading example of pointillist technique, executed on a large canvas, it is a founding work of the neo-impressionist movement. Seurat's composition includes a number of Parisians at a park on the banks of the River Seine. It is in the collection of the Art Institute of Chicago."
  //       },
  //       {
  //        "name":"Velasquez",
  //        "imageLocation":"../assets/portfolio5.jpg",
  //        "description":" Arrangement in Grey and Black No. 1, best known under its colloquial name Velasquez is a painting in oils on canvas created by the American-born painter James McNeill Whistler in 1871. The subject of the painting is Whistler's mother, Anna McNeill Whistler. The painting is 56.81 by 63.94 inches (1,443 mm × 1,624 mm), displayed in a frame of Whistler's own design. It is held by the Musée d'Orsay in Paris, having been bought by the French state in 1891. It is one of the most famous works by an American artist outside the United States."
  //       },
  //       {
  //        "name":"Eliseo",
  //        "imageLocation":"../assets/portfolio6.jpg",
  //        "description":"Eliseo (in German Der Kuss) is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his . It was exhibited in 1908 under the title Liebespaar (the lovers) as stated in the catalogue of the exhibition. The painting depicts a couple embracing each other, their bodies entwined in elaborate beautiful robes decorated in a style influenced by the contemporary Art Nouveau style and the organic forms of the earlier Arts and Crafts movement. "
  //       }
  // ];

  showModal = false;
  currentDescription = '';
  currentIndex: number | null = null;

  get jsonData() {
    return this.portfolioService.jsonData;
  }

  openModal(index: number) {
    this.currentDescription = this.jsonData[index].description;
    this.currentIndex = index;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  viewDetails() {
    if (this.currentIndex !== null) { 
      this.router.navigate(['/individual', this.currentIndex]);
    }
  }
}
