/**
 * Central place for everything that is a business or legal decision.
 * Anything still containing the TODO marker blocks the deployment (see scripts/check-launch-ready.mjs).
 */
const TODO = '[[TODO]]';

export const SITE = {
  name: 'MrWhisper',
  /** Public presentation with planned pricing; checkout and sales terms stay inactive. */
  preview: true,
  maker: 'Renixa',
  version: '2.17.0',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',

  /** Public project presentation is crawlable; this does not enable sales. */
  indexable: true,

  /** Price test value (decided 2026-10-06, review after ~20 sales). */
  currency: '€',
  priceEarly: 39,
  priceRegular: 59,
  earlyLimit: 100,
  /** Updates included with the license. Business decision: confirm before launch. */
  updateMonths: 12,
  /** Refund window offered in the Terms. Business decision: confirm before launch. */
  refundDays: 14,

  /** Lemon Squeezy checkout link. Empty = the buy button stays disabled ("launching soon"). */
  checkoutUrl: '',

  /** Demo video file below /public (empty = section hidden). */
  demoVideo: '/media/mrwhisper-demo.mp4',
  demoPoster: '/media/poster.jpg',
  demoCaptions: '/media/mrwhisper-demo.en.vtt',

  /** Legal notice data (Impressum). Must be real before the site goes public. */
  legal: {
    name: 'Murat Eren',
    street: TODO,
    city: TODO,
    email: 'info@mrwhisper.site',
    phone: '', // optional
    tradeName: '', // optional, e.g. a business name used for selling
    vatId: '', // optional
  },
} as const;

export function asset(path: string): string {
  return `${SITE.basePath}${path}`;
}

export function checkoutLabel(): boolean {
  return !SITE.preview && SITE.checkoutUrl.length > 0;
}
