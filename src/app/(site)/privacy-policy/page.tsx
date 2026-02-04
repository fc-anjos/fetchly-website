import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & User Rights',
  description:
    'Learn how Fetchly, LLC collects, uses, and protects your personal data. Review our Privacy Policy for details on your rights, GDPR compliance, and data security.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <header className="py-12 md:py-16">
        <Container size="sm">
          <div className="text-center">
            <Heading level="display-1" className="text-white mb-4">Privacy Policy</Heading>
            <Text size="lg" className="text-gray-400">Effective date: July 22, 2025</Text>
          </div>
        </Container>
      </header>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <Container size="sm">
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              This privacy notice for <strong>Fetchly, LLC</strong> (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and why we might
              collect, store, use, and/or share (&quot;process&quot;) your information when you use
              our services (&quot;Services&quot;), such as when you:
            </p>
            <ul>
              <li>
                Visit our website at{' '}
                <a href="https://fetch.ly/" target="_blank" rel="noopener noreferrer">
                  https://fetch.ly
                </a>
                , or any website of ours that links to this privacy notice;
              </li>
              <li>
                Engage with us in other related ways, including any sales, marketing, or events.
              </li>
            </ul>
            <p>
              <strong>Questions or concerns?</strong> Reading this privacy notice will help you
              understand your privacy rights and choices. If you do not agree with our policies and
              practices, please do not use our Services. If you still have any questions or
              concerns, please contact us at{' '}
              <a href="mailto:info@fetch.ly">info@fetch.ly</a>.
            </p>

            <h2>Summary of key points</h2>
            <p>
              This summary provides key points from our privacy notice, but you can find out more
              details about any of these topics by clicking the link following each key point or by
              using our table of contents below to find the section you are looking for.
            </p>

            <h2>Key questions &amp; answers</h2>
            <p>
              <strong>What personal information do we process?</strong>
              <br />
              When you visit, use, or navigate our Services, we may process personal information
              depending on how you interact with Fetchly, LLC and the Services, the choices you
              make, and the products and features you use.
            </p>
            <p>
              <strong>Do we process any sensitive personal information?</strong>
              <br />
              We do <strong>not</strong> process sensitive personal information.
            </p>
            <p>
              <strong>Do we receive any information from third parties?</strong>
              <br />
              We do <strong>not</strong> receive any information from third parties.
            </p>
            <p>
              <strong>How do we process your information?</strong>
              <br />
              We process your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to ensure legal
              compliance. We may also process your information for other purposes with your consent.
              We process your information only when we have a valid legal reason to do so.
            </p>
            <p>
              <strong>
                In what situations and with which parties do we share personal information?
              </strong>
              <br />
              We may share information in specific situations and with specific third parties.
            </p>
            <p>
              <strong>How do we keep your information safe?</strong>
              <br />
              We have organizational and technical processes and procedures in place to protect your
              personal information. However, no electronic transmission over the internet or
              information storage technology can be guaranteed to be 100% secure, so we cannot
              promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security and improperly collect, access, steal, or
              modify your information.
            </p>
            <p>
              <strong>What are your rights?</strong>
              <br />
              Depending on where you are located geographically, the applicable privacy law may mean
              you have certain rights regarding your personal information.
            </p>
            <p>
              <strong>How do you exercise your rights?</strong>
              <br />
              The easiest way to exercise your rights is by filling out our data subject request
              form or by contacting us. We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>

            <h2>Table of contents</h2>
            <ol>
              <li>What information do we collect?</li>
              <li>How do we process your information?</li>
              <li>What legal bases do we rely on to process your personal information?</li>
              <li>When and with whom do we share your personal information?</li>
              <li>Do we use cookies and other tracking technologies?</li>
              <li>How long do we keep your information?</li>
              <li>How do we keep your information safe?</li>
              <li>What are your privacy rights?</li>
              <li>Controls for do-not-track features</li>
              <li>Do California residents have specific privacy rights?</li>
              <li>Do we make updates to this notice?</li>
              <li>How can you contact us about this notice?</li>
              <li>How can you review, update, or delete the data we collect from you?</li>
            </ol>

            <h2>1. What information do we collect?</h2>
            <h3>Personal information you disclose to us</h3>
            <p>
              <strong>In short:</strong> We collect personal information that you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us when you express an
              interest in obtaining information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you contact us.
            </p>

            <h3>Personal information provided by you</h3>
            <p>
              The personal information that we collect depends on the context of your interactions
              with us and the Services, the choices you make, and the products and features you use.
              The personal information we collect may include the following:
            </p>
            <ul>
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
            </ul>

            <h3>Sensitive information</h3>
            <p>
              We do <strong>not</strong> process sensitive information.
            </p>
            <p>
              <strong>Important:</strong> All personal information that you provide to us must be
              true, complete, and accurate, and you must notify us of any changes to such personal
              information.
            </p>

            <h3>Information automatically collected</h3>
            <p>
              <strong>In short:</strong> Some information, such as your Internet Protocol (IP)
              address and/or browser and device characteristics, is collected automatically when
              you visit our Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services, and other technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies and similar
              technologies.
            </p>

            <h3>The information we collect includes:</h3>
            <p>
              <strong>Log and usage data</strong>
              <br />
              Log and usage data is service-related, diagnostic, usage, and performance information
              our servers automatically collect when you access or use our Services and which we
              record in log files. Depending on how you interact with us, this log data may include
              your IP address, device information, browser type, and settings and information about
              your activity in the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches, and other actions you take such as which
              features you use), device event information (such as system activity, error reports
              (sometimes called &quot;crash dumps&quot;), and hardware settings).
            </p>
            <p>
              <strong>Device data</strong>
              <br />
              We collect device data, such as information about your computer, phone, tablet, or
              other device you use to access the Services. Depending on the device used, this device
              data may include information such as your IP address (or proxy server), device and
              application identification numbers, location, browser type, hardware model, Internet
              service provider and/or mobile carrier, operating system, and system configuration
              information.
            </p>
            <p>
              <strong>Location data</strong>
              <br />
              We collect location data such as information about your device&apos;s location, which
              can be precise or approximate. How much information we collect depends on the type and
              settings of the device you use to access the Services. For example, we may use GPS and
              other technologies to collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to collect this information
              either by refusing access to the information or by disabling your Location setting on
              your device. However, if you choose to opt out, you may not be able to use certain
              aspects of the Services.
            </p>

            <h2>2. How do we process your information?</h2>
            <p>
              <strong>In short:</strong> We process your information to provide, improve, and
              administer our Services, communicate with you, for security and fraud prevention, and
              to ensure legal compliance. We may also process your information for other purposes
              with your consent.
            </p>
            <p>
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </p>
            <ul>
              <li>
                <strong>To respond to user inquiries/offer support to users</strong> - We may
                process your information to respond to your inquiries and solve any potential issues
                you might have with the requested service;
              </li>
              <li>
                <strong>To enable user-to-user communications</strong> - We may process your
                information if you choose to use any of our offerings that allow for communication
                with another user;
              </li>
              <li>
                <strong>To save or protect an individual&apos;s vital interest</strong> - We may
                process your information when necessary to save or protect an individual&apos;s
                vital interest, such as to prevent harm.
              </li>
            </ul>

            <h2>3. What legal bases do we rely on to process your information?</h2>
            <p>
              <strong>In short:</strong> We only process your personal information when we believe
              it is necessary, and we have a valid legal reason (i.e., legal basis) to do so under
              applicable law such as: with your consent, to ensure law compliance, to provide you
              with services to enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>

            <h3>If you are located in the EU or UK</h3>
            <p>
              The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
              valid legal bases we rely on in order to process your personal information. As such,
              we may rely on the following legal bases to process your personal information:
            </p>
            <ul>
              <li>
                <strong>Consent</strong> - We may process your information if you have given us
                permission (i.e., consent) to use your personal information for a specific purpose.
                You can withdraw your consent at any time;
              </li>
              <li>
                <strong>Performance of a contract</strong> - We may process your personal
                information when we believe it is necessary to fulfil our contractual obligations to
                you, including providing our Services or at your request prior to entering into a
                contract with you;
              </li>
              <li>
                <strong>Legal obligations</strong> - We may process your information where we
                believe it is necessary for compliance with our legal obligations, such as to
                cooperate with a law enforcement body or regulatory agency, exercise or defend our
                legal rights, or disclose your information as evidence in litigation in which we are
                involved;
              </li>
              <li>
                <strong>Vital interests</strong> - We may process your information where we believe
                it is necessary to protect your vital interests or the vital interests of a third
                party, such as situations involving potential threats to the safety of any person.
              </li>
            </ul>

            <h3>If you are located in Canada</h3>
            <p>
              We may process your information if you have given us specific permission (i.e.,
              express consent) to use your personal information for a specific purpose, or in
              situations where your permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time.
            </p>
            <p>
              In some exceptional cases, we may be legally permitted under applicable law to process
              your information without your consent, including, for example:
            </p>
            <ul>
              <li>
                If collection is clearly in the interests of an individual and consent cannot be
                obtained in a timely way;
              </li>
              <li>For investigations and fraud detection and prevention;</li>
              <li>For business transactions provided certain conditions are met;</li>
              <li>
                If it is contained in a witness statement and the collection is necessary to assess,
                process, or settle an insurance claim;
              </li>
              <li>
                For identifying injured, ill, or deceased persons and communicating with next of
                kin;
              </li>
              <li>
                If we have reasonable grounds to believe an individual has been, is, or may be
                victim of financial abuse;
              </li>
              <li>
                If it is reasonable to expect collection and use with consent would compromise the
                availability or the accuracy of the information and the collection is reasonable for
                purposes related to investigating a breach of an agreement or a contravention of the
                laws of Canada or a province;
              </li>
              <li>
                If disclosure is required to comply with a subpoena, warrant, court order, or rules
                of the court relating to the production of records;
              </li>
              <li>
                If it was produced by an individual in the course of their employment, business, or
                profession and the collection is consistent with the purposes for which the
                information was produced;
              </li>
              <li>If the collection is solely for journalistic, artistic, or literary purposes;</li>
              <li>If the information is publicly available and is specified by the regulations.</li>
            </ul>

            <h2>4. When and with whom do we share your personal information?</h2>
            <p>
              <strong>In short:</strong> We may share information in specific situations described
              in this section and/or with the following third parties.
            </p>
            <p>We may need to share your personal information in the following situations:</p>
            <ul>
              <li>
                <strong>Business transfers</strong> - We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>

            <h2>5. Do we use cookies and other tracking technologies?</h2>
            <p>
              <strong>In short:</strong> We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              access or store information. Specific information about how we use such technologies
              and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>

            <h2>6. How long do we keep your information?</h2>
            <p>
              <strong>In short:</strong> We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this privacy notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements).{' '}
              <strong>
                No purpose in this notice will require us keeping your personal information for
                longer than 1 year.
              </strong>
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in backup archives), then
              we will securely store your personal information and isolate it from any further
              processing until deletion is possible.
            </p>

            <h2>7. How do we keep your information safe?</h2>
            <p>
              <strong>In short:</strong> We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <p>
              We have implemented appropriate and reasonable technical and organizational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
              other unauthorized third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
            </p>
            <p>
              Although we will do our best to protect your personal information, transmission of
              personal information to and from our Services is at your own risk. You should only
              access the Services within a secure environment.
            </p>

            <h2>8. What are your privacy rights?</h2>
            <p>
              <strong>In short:</strong> In some regions, such as the European Economic Area (EEA),
              the United Kingdom (UK), and Canada, you have rights that allow you greater access to
              and control over your personal information. You may review, change, or terminate your
              account at any time.
            </p>
            <p>
              In some regions (like the EEA, UK, and Canada), you have certain rights under
              applicable data protection laws. These may include the right:
            </p>
            <ul>
              <li>(I) to request access and obtain a copy of your personal information</li>
              <li>(II) to request rectification or erasure</li>
              <li>(III) to restrict the processing of your personal information</li>
              <li>(IV) if applicable, to data portability</li>
            </ul>
            <p>
              In certain circumstances, you may also have the right to object to the processing of
              your personal information. You can make such a request by contacting us using the
              contact details provided in the section &quot;How can you contact us about this
              notice?&quot; below.
            </p>
            <p>
              We will consider and act upon any request in accordance with applicable data
              protection laws.
            </p>

            <h3>Regional-specific rights</h3>
            <p>
              <strong>If you are located in the EEA or UK</strong> and you believe we are unlawfully
              processing your personal information, you also have the right to complain to your
              local data protection supervisory authority.
            </p>
            <p>
              <strong>If you are located in Switzerland</strong>, the contact details for the data
              protection authorities are available at:{' '}
              <a
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.edoeb.admin.ch/edoeb/en/home.html
              </a>
              .
            </p>

            <h3>Withdrawing your consent</h3>
            <p>
              If we are relying on your consent to process your personal information, which may be
              express and/or implied consent depending on the applicable law, you have the right to
              withdraw your consent at any time. To do so, contact us using the contact details
              provided in the section &quot;How can you contact us about this notice?&quot; below.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of the processing before
              its withdrawal, nor, when applicable law allows, will it affect the processing of your
              personal information conducted in reliance on lawful processing grounds other than
              consent.
            </p>

            <h3>Cookies and similar technologies</h3>
            <p>
              Most Web browsers are set to accept cookies by default. If you prefer, you can usually
              choose to set your browser to remove cookies and to reject cookies. If you choose to
              remove cookies or reject cookies, this could affect certain features or services of
              our Services. To opt out of interest-based advertising by advertisers on our Services
              visit{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
            <p>
              If you have questions or comments about your privacy rights, you may email us at{' '}
              <a href="mailto:info@fetch.ly">
                <strong>info@fetch.ly</strong>
              </a>
              .
            </p>

            <h2>9. Controls for do-not-track features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your
              privacy preference not to have data about your online browsing activities monitored
              and collected. At this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized.
            </p>
            <p>
              As such, we do <strong>not</strong> currently respond to DNT browser signals or any
              other mechanism that automatically communicates your choice not to be tracked online.
              If a standard for online tracking is adopted that we must follow in the future, we
              will inform you about that practice in a revised version of this privacy notice.
            </p>

            <h2>10. Do California residents have specific privacy rights?</h2>
            <p>
              <strong>In short:</strong> Yes, if you are a resident of California, you are granted
              specific rights regarding access to your personal information.
            </p>

            <h3>Shine the Light law</h3>
            <p>
              California Civil Code Section 1798.83, also known as the{' '}
              <strong>&quot;Shine the Light&quot;</strong> law, permits our users who are California
              residents to request and obtain from us, once a year and free of charge, information
              about categories of personal information (if any) we disclosed to third parties for
              direct marketing purposes and the names and addresses of all third parties with which
              we shared personal information in the immediately preceding calendar year.
            </p>
            <p>
              If you are a California resident and would like to make such a request, please submit
              your request in writing to us using the contact information provided below.
            </p>

            <h3>Minor&apos;s rights</h3>
            <p>
              If you are under 18 years of age, reside in California, and have a registered account
              with Services, you have the right to request removal of unwanted data that you
              publicly post on the Services. To request removal of such data, please contact us
              using the contact information provided below and include the email address associated
              with your account and a statement that you reside in California. We will make sure the
              data is not publicly displayed on the Services, but please be aware that the data may
              not be completely or comprehensively removed from all our systems (e.g., backups,
              etc.).
            </p>

            <h3>California Consumer Privacy Act (CCPA) privacy notice</h3>
            <p>
              The California Code of Regulations defines a &quot;<strong>resident</strong>&quot; as:
            </p>
            <ol>
              <li>
                Every individual who is in the State of California for other than a temporary or
                transitory purpose and
              </li>
              <li>
                Every individual who is domiciled in the State of California who is outside the
                State of California for a temporary or transitory purpose
              </li>
            </ol>
            <p>
              All other individuals are defined as &quot;<strong>non-residents</strong>&quot;.
            </p>
            <p>
              If this definition of &quot;resident&quot; applies to you, we must adhere to certain
              rights and obligations regarding your personal information.
            </p>

            <h3>What categories of personal information do we collect?</h3>
            <p>
              <strong>
                We have collected the following categories of personal information in the past
                twelve (12) months:
              </strong>
            </p>
            <p>
              <strong>Category B: Personal information categories listed in the California Customer Records statute</strong>
              <br />
              Examples: Name, contact information, education, employment, employment history, and
              financial information
              <br />
              Collected: Yes
            </p>
            <p>
              All other categories (Identifiers, Protected classification, Commercial information, Biometric information,
              Internet activity, Geolocation, Audio/visual, Professional information, Education information, and Inferences)
              have not been collected.
            </p>
            <p>
              We may also collect other personal information outside of these categories in
              instances where you interact with us in person, online, by phone or by mail in the
              context of:
            </p>
            <ul>
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests;</li>
              <li>
                Facilitation in the delivery of our Services and to respond to your inquiries.
              </li>
            </ul>

            <h3>How do we use and share your personal information?</h3>
            <p>
              More information about our data collection and sharing practices can be found in this
              privacy notice.
            </p>
            <p>
              You may contact us by email at{' '}
              <a href="mailto:info@fetch.ly">
                <strong>info@fetch.ly</strong>
              </a>
              , or by referring to the contact details at the bottom of this document.
            </p>
            <p>
              If you are using an authorized agent to exercise your right to opt out we may deny a
              request if the authorized agent does not submit proof that they have been validly
              authorized to act on your behalf.
            </p>

            <h3>Will your information be shared with anyone else?</h3>
            <p>
              We may disclose your personal information with our service providers pursuant to a
              written contract between us and each service provider. Each service provider is a
              for-profit entity that processes the information on our behalf.
            </p>
            <p>
              We may use your personal information for our own business purposes, such as for
              undertaking internal research for technological development and demonstration. This is
              not considered to be &quot;selling&quot; of your personal information.
            </p>
            <p>
              <strong>
                Fetchly, LLC has not disclosed or sold any personal information to third parties for
                a business or commercial purpose in the preceding twelve (12) months. Fetchly, LLC
                will not sell personal information in the future belonging to website visitors,
                users, and other consumers.
              </strong>
            </p>

            <h3>Your rights with respect to your personal data</h3>

            <h4>Right to request data deletion</h4>
            <p>
              You can ask for the deletion of your personal information. If you ask us to delete
              your personal information, we will respect your request and delete your personal
              information, subject to certain exceptions provided by law, such as (but not limited
              to) the exercise by another consumer of his or her right to free speech, our
              compliance requirements resulting from a legal obligation, or any processing that may
              be required to protect against illegal activities.
            </p>

            <h4>Right to be informed</h4>
            <p>Depending on the circumstances, you have a right to know:</p>
            <ul>
              <li>Whether we collect and use your personal information;</li>
              <li>The categories of personal information that we collect;</li>
              <li>The purposes for which the collected personal information is used;</li>
              <li>Whether we sell your personal information to third parties;</li>
              <li>
                The categories of personal information that we sold or disclosed for a business
                purpose;
              </li>
              <li>
                The categories of third parties to whom the personal information was sold or
                disclosed for a business purpose;
              </li>
              <li>
                The business or commercial purpose for collecting or selling personal information.
              </li>
            </ul>
            <p>
              In accordance with applicable law, we are not obligated to provide or delete consumer
              information that is de-identified in response to a consumer request or to re-identify
              individual data to verify a consumer request.
            </p>

            <h4>Right to non-discrimination for the exercise of a consumer&apos;s privacy rights</h4>
            <p>
              We will <strong>not</strong> discriminate against you if you exercise your privacy
              rights.
            </p>

            <h4>Verification process</h4>
            <p>
              Upon receiving your request, we will need to verify your identity to determine you are
              the same person about whom we have the information in our system. These verification
              efforts require us to ask you to provide information so that we can match it with
              information you have previously provided us.
            </p>
            <p>
              We will only use personal information provided in your request to verify your identity
              or authority to make the request. To the extent possible, we will avoid requesting
              additional information from you for the purposes of verification. However, if we
              cannot verify your identity from the information already maintained by us, we may
              request that you provide additional information for the purposes of verifying your
              identity and for security or fraud-prevention purposes. We will delete such
              additionally provided information as soon as we finish verifying you.
            </p>

            <h4>Other privacy rights</h4>
            <ul>
              <li>You may object to the processing of your personal information;</li>
              <li>
                You may request correction of your personal data if it is incorrect or no longer
                relevant, or ask to restrict the processing of the information;
              </li>
              <li>
                You can designate an authorized agent to make a request under the CCPA on your
                behalf. We may deny a request from an authorized agent that does not submit proof
                that they have been validly authorized to act on your behalf in accordance with the
                CCPA;
              </li>
              <li>
                You may request to opt out from future selling of your personal information to third
                parties. Upon receiving an opt-out request, we will act upon the request as soon as
                feasibly possible, but no later than fifteen (15) days from the date of the request
                submission.
              </li>
            </ul>
            <p>
              To exercise these rights, you can contact us by email at{' '}
              <a href="mailto:info@fetch.ly">
                <strong>info@fetch.ly</strong>
              </a>
              , or by referring to the contact details at the bottom of this document. If you have a
              complaint about how we handle your data, we would like to hear from you.
            </p>

            <h2>11. Do we make updates to this notice?</h2>
            <p>
              <strong>In short:</strong> Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p>
              We may update this privacy notice from time to time. The updated version will be
              indicated by an updated &quot;<strong>Revised</strong>&quot; date and the updated
              version will be effective as soon as it is accessible. If we make material changes to
              this privacy notice, we may notify you either by prominently posting a notice of such
              changes or by directly sending you a notification. We encourage you to review this
              privacy notice frequently to be informed of how we are protecting your information.
            </p>

            <h2>12. How can you contact us about this notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at{' '}
              <a href="mailto:info@fetch.ly">
                <strong>info@fetch.ly</strong>
              </a>{' '}

            </p>

            <h2>13. How can you review, update, or delete the data we collect from you?</h2>
            <p>
              Based on the applicable laws of your country, you may have the right to request access
              to the personal information we collect from you, change that information, or delete
              it. To request to review, update, or delete your personal information, please contact
              us at <a href="mailto:info@fetch.ly">info@fetch.ly</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
