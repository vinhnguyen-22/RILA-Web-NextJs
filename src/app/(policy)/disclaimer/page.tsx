import Heading from '@/components/common/Heading/Heading';
import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[20px]">
        <div className="text-center">
          <Heading title="Disclaimer" />
        </div>
        <p className="my-5 text-justify">
          While utmost care has been taken to produce and process the information and data in all of our reports,
          articles, and shared information from reliable sources, it is important to note that no explicit or implicit
          warranty is provided regarding the completeness, accuracy, adequacy, or usability of the information. The
          authors and contributors of reports, articles, and information shared by RILA GLOBAL CONSULTING LLC cannot be
          held liable for any errors or omissions contained herein or for the interpretation of its content. Any
          references made to specific products or brands, whether by trade name, trademark, or otherwise, should not be
          considered as an endorsement, recommendation, or preference by RILA GLOBAL CONSULTING LLC. Such references
          should not be used for advertising or product endorsement purposes. It is essential to recognize that the
          opinions expressed in any of our reports, articles, information, and others are subject to change without
          prior notice.
        </p>
        <p className="my-5 text-justify">
          The contents of our publications, including but not limited to text and graphics, are protected by copyright
          law and are the property of RILA GLOBAL CONSULTING LLC. All rights are reserved. Reproduction, distribution,
          or transmission of any part of our publications in any form or by any means, including photocopying,
          recording, or other electronic or mechanical methods, without the prior written permission of the publisher,
          is strictly prohibited. However, brief quotations embodied in critical reviews and certain other
          non-commercial uses permitted by copyright law may be considered. For permission requests, please contact the
          publisher by addressing your correspondence to the &quot;Attention Permissions Coordinator&quot; at
          hello@rilaglobal.com.
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
