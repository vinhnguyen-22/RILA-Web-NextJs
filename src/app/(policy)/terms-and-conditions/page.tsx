import Heading from '@/components/common/Heading/Heading';
import CookieBanner from '@/components/common/banners/CookieBanner';
import React from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions',
};
const TermsCondition = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[20px]">
        <div className="text-center">
          <Heading title="Terms and Conditions" />
        </div>
        <div className="max-w-[841px] text-center text-lg my-6 tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
          These Website Terms & Conditions (“Terms”) only apply to the use of certain websites which are owned and/or
          operated by or on behalf of RILA GLOBAL CONSULTING LLC (each, the “Site”, and collectively, the “Sites”), or
          available through our authorized third parties, or by any of the other means described herein. RILA GLOBAL
          CONSULTING values your interest in our products or services and appreciates your visit to its Sites.
        </div>
      </div>

      <p className="text-justify">
        <strong>For the avoidance of doubt, these Terms apply to at least the following Sites:</strong>
      </p>
      <p className="text-center">
        <a target="_bank" className="text-indigo-700" href="http://www.rilaglobal.com">
          WWW.RILAGLOBAL.COM
        </a>
      </p>
      <p className="text-center">
        <a target="_bank" className="text-indigo-700" href="http://www.rilaglobalconsulting.com">
          WWW.RILAGLOBALCONSULTING.COM
        </a>
      </p>
      <p className="text-justify">
        These Terms do not apply to any website owned and/or operated by or on behalf of any third party even if we
        provide a link to such website on one of our Sites. Please refer to the terms of use of any such third-party
        websites for information regarding the terms and conditions of your use of such websites.
      </p>
      <p className="text-justify">
        When we refer to “RILA GLOBAL CONSULTING,” “we,” “us,” or “our,” we mean RILA GLOBAL CONSULTING LLC and/or the
        specific division, subsidiary, or affiliate that operates the Site, provides its content, or processes
        information received through it, each as appropriate and applicable.
      </p>
      <p className="text-justify">
        When we refer to “you” or “your,” we mean the person accessing the Site. If the person accessing the Site acts
        on behalf of, or for the purposes of, another person, including a business or other organization, “you” or
        “your” also means that other person, including a business organization.
      </p>
      <h3 className="font-semibold text-xl my-6">USER ACCESS</h3>
      <p className="text-justify">
        RILA GLOBAL CONSULTING makes this Site available subject to the following terms and conditions and all
        applicable laws. By accessing, browsing, or otherwise using (collectively, “us” or “using”) this Site, you
        acknowledge that you, the individual user of this Site, have read, understood, and agre to be legally bound by
        these Terms, and to comply with all applicable laws and regulations, without limitation or qualification. By
        using this Site, you further acknowledge that you have the authority and do hereby legally bind the business
        entity, if any, to which you serve as an agent, independent contractor, or employe thereof to the same Terms,
        without limitation or qualification. These Terms shall take effect immediately on your first use of the Site. If
        you do not agre to the Terms, you are not authorized to access, browse, or otherwise use this Site.
      </p>
      <p className="text-justify">
        RILA GLOBAL CONSULTING at its sole discretion reserves the right to alter or change these Terms at any time. Any
        modifications will become effective when posted on this Site. By using this Site after any changes in these
        Terms, you agre to be legally bound by the Terms as amended. Therefore, you should frequently revisit this page
        to determine the present terms and conditions to which you are legally bound.
      </p>
      <p className="text-justify">
        RILA GLOBAL CONSULTING may terminate your right to use the Sites without cause at any time and effective
        immediately. In addition, RILA GLOBAL CONSULTING may terminate your right to use this Site or any of its Sites
        immediately and without notice for violation of any part of these Terms. In the event of any such termination,
        the restrictions on your use of the material on this Site shall survive such termination, and you agre to be
        bound by those terms. Any paid subscription access terms will be prorated and refunded for termination without
        cause.
      </p>
      <h3 className="font-semibold text-xl my-6">
        INTELLECTUAL PROPERTY AND RESTRICTIONS ON THE USE OF INFORMATION AND CONTENT
      </h3>
      <p className="text-justify">
        All information and content provided on this Site, whether explicitly marked or not, are the property of RILA
        GLOBAL CONSULTING, its subsidiaries, affiliated companies or joint partners, or others, and are subject to the
        U.S. and international copyright and unfair competition laws. The information and content provided include, but
        are not limited to, the text, graphics, image, video, audio, animation, software, their related files, and their
        arrangement on the Site.
      </p>
      <p className="text-justify">
        All trademarks, service marks, logos, model and brand names, emblems, and protectable trade dress elements
        (collectively, “Marks”), whether explicitly marked or not, used on this Site are owned by RILA GLOBAL
        CONSULTING, its subsidiaries, affiliated companies, or joint partners, or used under license, and are subject to
        U.S. (federal and state) and international trademark and unfair competition laws.
      </p>
      <p className="text-justify">
        You may not copy, reproduce, download, upload, post, broadcast, transmit, distribute, publish, republish, or
        otherwise use any information, content, or Marks provided on this Site in any form or by any means without the
        express written permission of RILA GLOBAL CONSULTING.
      </p>
      <p className="text-justify">
        Nothing contained in this Site shall be construed as conferring by implication, estoppel, or otherwise, any
        license or right to any copyright, patent, trademark, or other proprietary interest of RILA GLOBAL CONSULTING or
        any third party.
      </p>
      <p className="text-justify">
        Any use of the information, content, or Marks provided on this Site that does not comport with the above Terms
        shall be an unauthorized use and subject you to civil and criminal penalties as provided by the U.S. and
        international intellectual property laws and other applicable laws.
      </p>
      <h3 className="font-semibold text-xl my-6">ADOPTION OF ADDITIONAL TERMS</h3>
      <p className="text-justify">
        These Terms expressly include any and all additional terms and conditions that are set forth in any of the
        Sites, including but not limited to any such terms and conditions that are specified in posted agrements and
        frequently asked questions listings. To the extent, any of these Terms are in conflict with any terms and
        conditions set forth in any of the Sites, the terms, and conditions set forth in the Sites shall control with
        respect to the particular Site to which the terms and conditions are posted.
      </p>
      <h3 className="font-semibold text-xl my-6">DISCLAIMERS</h3>
      <p className="text-justify">
        You use this site and the products and services offered or referenced on this site, including those of third
        parties, at your own risk. All information and content and all products and services referenced on or offered
        through this site, including content, products, and services provided by third-party advertisers and sponsors on
        this site, are provided “as is” without any express or implied warranty or representation of any kind including,
        without limitation, any implied warranties of merchantability, fitness for a particular purchase, title or
        non-infringement.
      </p>
      <p className="text-justify">
        In no event will RILA GLOBAL CONSULTING, its subsidiaries, affiliated companies, or suppliers be liable to any
        party for any direct, indirect, special, or other consequential damages arising out of or related to your use of
        this site or any of the products or services offered through this site, or any other hyperlinked site including,
        without limitation, any lost revenues, lost profits, loss of prospective economic advantage, business
        interruption, loss of programs or other data on your handling system or otherwise arising out of the use, misuse
        of or inability to use this site or the information, content documents or software thereof, even if RILA GLOBAL
        CONSULTING, its subsidiaries, affiliated companies or suppliers are advised of the possibility of such damages
        or for any claim by a third party. Your sole and exclusive remedy against RILA GLOBAL CONSULTING is to
        discontinue the use of this site and any hyperlinked sites and to discontinue the use of products and services
        offered or referenced on this site and any hyperlinked sites.
      </p>
      <p className="text-justify">
        Without limiting the above disclaimers, RILA GLOBAL CONSULTING, its subsidiaries, affiliated companies and joint
        partners: (1) make no warranties or representations whatsoever concerning this Site or any other Internet Site,
        the access to, or the availability or use of, this Site or any other Internet website, the information and
        content from whatever source posted on or referred to in this Site or any other Internet website or the
        accuracy, completeness or timeliness of such information or content; (2) do not warrant or represent that your
        access to, or use of, this Site or any other Internet website will be uninterrupted or fre of errors or
        omissions, that defects will be corrected, or that this Site or any other Internet website is, or the
        information or content from whatever source available for use or downloading are fre of computer viruses, worms,
        Trojan horses or other harmful components; (3) do not represent or warrant that any services or products listed
        on, or accessed through, this Site will be available for purchase or not withdrawn at any time and makes no
        representation or warranty of any kind whatsoever concerning such products or services; and (4) do not represent
        or warrant the accuracy, functionality, specifications or any other aspect of items from whatever source posted
        or accessed through this Site. Please note that some jurisdictions may not allow the exclusion of implied
        warranties, so some of the above exclusions may not apply to you.
      </p>
      <p className="text-justify">
        This Site may use hyperlinks as a convenience to you so that certain reference material, RILA GLOBAL
        CONSULTING-related subjects, and other pertinent material is easily accessible. Linked and referenced websites
        may not be operated, controlled, or maintained by RILA GLOBAL CONSULTING. Hyperlinks and references to other
        websites, including any RILA GLOBAL CONSULTING-affiliated entity, do not constitute sponsorship, endorsement, or
        approval by RILA GLOBAL CONSULTING of the information, content, policies, or practices of such linked or
        referenced websites. RILA GLOBAL CONSULTING, its subsidiaries, affiliated companies, and joint partners do not
        accept any responsibilities for any information or content, availability, policies, practices, or any use of
        such websites. You access, browse and use such websites at your own risk.
      </p>
      <p className="text-justify">
        RILA GLOBAL CONSULTING has no obligation to update any information or content on this Site. Accordingly, RILA
        GLOBAL CONSULTING, its subsidiaries, affiliated companies, and joint partners assume no responsibility regarding
        the accuracy of the information or content provided on the Site. Any use of the information or content provided
        on this Site is done so at your own risk.
      </p>
      <h3 className="font-semibold text-xl my-6">PRIVACY POLICY</h3>
      <p className="text-justify">
        These Terms include the terms and conditions of RILA GLOBAL CONSULTING’s Privacy Policy. Accordingly, by using
        this Site, you affirmatively acknowledge that you have read, understood, and agre to be legally bound by the
        terms and conditions of RILA GLOBAL CONSULTING’s Privacy Policy.
      </p>
      <h3 className="font-semibold text-xl my-6">NO RECOMMENDATIONS OR ADVICE PROVIDED</h3>
      <p className="text-justify">
        RILA GLOBAL CONSULTING does not provide recommendations or advice of any kind through the Site. Although
        information and content relating to social media, social listening strategy, and related topics may be available
        through the Site, you should not construe such information and content as legal, investment, financial,
        marketing, or any type of advice. You alone bear the responsibility of evaluating any information or content
        available on the Site. In exchange for using such information or content, you hereby agre to release from any
        claim and to not hold RILA GLOBAL CONSULTING, its subsidiaries, affiliated companies, and Suppliers liable for
        any possible claim for damages arising from any decision that you may make based on information or content
        available on the Site.
      </p>
      <h3 className="font-semibold text-xl my-6">MISCELLANEOUS</h3>
      <p className="text-justify">
        You warrant to RILA GLOBAL CONSULTING that you will not attempt to gain unauthorized access to any services
        offered by RILA GLOBAL CONSULTING or computer systems or networks connected to any RILA GLOBAL CONSULTING server
        through hacking, password mining, or any other means. You may not obtain or attempt to obtain any materials or
        information through any means not intentionally made available by RILA GLOBAL CONSULTING. When using the Site
        you agre not to pretend to be someone else or spoof their identity.
      </p>
      <p className="text-justify">
        You agre to defend, indemnify, save and hold harmless RILA GLOBAL CONSULTING, its subsidiaries, affiliated
        companies, joint partners, licenses, and their respective directors, members, shareholders, officers, employes,
        and agents from and against all liabilities, claims, damages, and expenses, including reasonable attorneys’ fes
        as incurred, arising out of your use of this Site including any violation or alleged violation of these Terms,
        and any losses or claims arising out of your use of any products or services you may have obtained on one of our
        Sites.&nbsp;
      </p>
      <p className="text-justify">
        The Company consents only to links to this website in which the link and the pages that are activated by the
        link do not: (a) create frames around any page on this Web site or use other techniques that alter in any way
        the visual presentation or appearance of any content within this site; (b) misrepresent your relationship with
        the Company; (c) imply that the Company approves or endorses you, your Web site, or your service or product
        offerings; and (d) present false or misleading impressions about the Company or otherwise damage the goodwill
        associated with the Company name or trademarks. As a further condition to being permitted to link to this site,
        you agree that the Company may at any time, in its sole discretion, terminate permission to link to this Web
        site. In such event, you agree to immediately remove all links to this Web site and to cease any related use of
        the Company trademarks.
      </p>
      <p className="text-justify">
        RILA GLOBAL CONSULTING controls its Site (excluding linked sites) from its offices in New York, NY. Accessing
        this Site in locations where the use of such content is illegal is prohibited. By accessing this Site you agre
        that the statutes and laws of the State of New York, notwithstanding any principles of conflicts of law, will
        apply to all matters relating to the use of this Site and that if you use this Site from any other location you
        are responsible for compliance with applicable local laws. Any claim relating to this Site shall be litigated in
        the State of New York and you hereby consent to the jurisdiction and venue of those courts. If any part of these
        Terms is demed unlawful, void, or unenforceable, that part will be demed severable and will not affect the
        validity and enforceability of any remaining provisions. Regardless of any statute or law to the contrary, any
        claim or cause of action arising out of or related to the use of this Site or these Terms must be filed within
        one (1) year after such claim or cause of action arose or be forever barred. The section titles herein are for
        convenience only and have no legal or contractual effect.
      </p>
      <p className="text-justify">
        By using this Site, you further agre that you will not use this Site or any materials available thereon for any
        unlawful activity, or use it in any way that would violate any of these Terms.
      </p>
      <p className="text-justify">
        When applicable, you further agre, as a condition of using this site, to ensure that all of your agents,
        employes, and independent contractors adhere to these Terms.
      </p>

      <CookieBanner />
    </>
  );
};

export default TermsCondition;
