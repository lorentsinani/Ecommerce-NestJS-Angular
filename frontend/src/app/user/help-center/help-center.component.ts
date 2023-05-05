import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  searchTerm: string = '';

  faqs = [
    {
      question: 'What is the purchasing process?',
      answer: 'The purchasing process involves several steps, including selecting the product, adding it to your cart, entering your shipping and billing information, and completing the payment. If you have any issues or questions during the process, feel free to contact our customer support team.',
      showAnswer: false
    },
    {
      question: 'How secure are my payment information?',
      answer: 'We take the security of your payment information very seriously. We use industry-standard encryption and security protocols to protect your personal and financial information. Additionally, we never store your credit card information on our servers, and we regularly monitor our systems for any potential security breaches.',
      showAnswer: false
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most products. If youre not completely satisfied with your purchase, you can return it for a refund or exchange within 30 days of the delivery date.Some products may have additional restrictions or requirements, so please check the product page or contact our customer support team for more information.',
      showAnswer: false
    }, {
      question: ' What if I change my mind and want to cancel my order ?',
      answer: 'IIf you change your mind and want to cancel your order, please contact us as soon as possible. If your order has not yet shipped, we will cancel the order and issue a refund. If your order has already shipped, you may need to return the item according to our return policy.',
      showAnswer: false
    },
    {
      question: 'How do I contact customer service?',
      answer: 'You can contact customer service by phone, email, or live chat. Our customer service representatives are available during regular business hours to assist you with any questions or concerns you may have.',
      showAnswer: false
    },
  ];

  search(): void {
    if (!this.searchTerm) {
      return;
    }

    const filteredFaqs = this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (filteredFaqs.length === 0) {
      alert(`No FAQs found for "${this.searchTerm}"`);
    }
  }

  get filteredFaqs() {
    return this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
