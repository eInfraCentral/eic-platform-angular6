export class Description {
    desc: string;
    label: string;
    mandatory?: boolean;
    recommended?: boolean;
}

/** Service Description Template **/

// Basic Information //
export const                        nameDesc = {mandatory: true,  label: 'Name', placeholder: 'Write full name...', desc: 'Brief and descriptive name of service/resource as assigned by the service/resource Provider.'};
export const        resourceOrganisationDesc = {mandatory: true,  label: 'Resource Organisation', placeholder: 'Select resource organisation...', desc: 'The name (or abbreviation) of the organisation that manages or delivers the resource, or that coordinates resource delivery in a federated scenario.'};
export const           resourceProvidersDesc = {mandatory: false, label: 'Resource Providers', addTitle: 'Resource Provider', placeholder: 'Select resource provider...', desc: 'The name(s) (or abbreviation(s)) of Provider(s) that manage or deliver the Resource in federated scenarios.'};
export const                     webpageDesc = {mandatory: true,  label: 'Webpage', placeholder: 'Write webpage url...', desc: 'Webpage with information about the service/resource usually hosted and maintained by the Provider.'};

// Marketing Information //
export const                 descriptionDesc = {mandatory: true,  label: 'Description', placeholder: 'Write a description...', desc: 'A high-level description in fairly non-technical terms of a) what the service/resource does, functionality it provides and resources it enables to access, b) the benefit to a user/customer delivered by a service; benefits are usually related to alleviating pains (e.g., eliminate undesired outcomes, obstacles or risks) or producing gains (e.g. increased performance, social gains, positive emotions or cost saving), c) list of customers, communities, users, etc. using the service.'};
export const                     taglineDesc = {mandatory: true,  label: 'Tagline', placeholder: 'Write a tagline...', desc: 'Short catch-phrase for marketing and advertising purposes. It will be usually displayed close the service name and should refer to the main value or purpose of the service.'};
export const                        logoDesc = {mandatory: true,  label: 'Logo', placeholder: 'Link to the logo', desc: 'Link to the logo/visual identity of the service. The logo will be visible at the Portal. To obtain the link:  Go to the Service\'s website --> Right Click on the Service\'s logo on the website --> Select "Copy Image Link" --> Paste it in the above field.'};
export const                  multimediaDesc = {mandatory: false, label: 'Multimedia', addTitle: 'Multimedia', placeholder: 'Write link to multimedia...', desc: 'Link to video, screenshots or slides showing details of the service/resource.'};
export const                    useCasesDesc = {mandatory: false, label: 'Use Cases', addTitle: 'Use Case', placeholder: 'Write use case...', desc: 'Link to use cases supported by this Resource.'};

// Classification Information //
export const            scientificDomainDesc = {mandatory: true,  label: 'Scientific Domain', placeholder: 'Select scientific domain...', desc: 'The branch of science, scientific discipline that is related to the service/resource.'};
export const         scientificSubDomainDesc = {mandatory: true,  label: 'Scientific Subdomain', placeholder: 'Select scientific subdomain after selecting scientific domain...', desc: 'The subbranch of science, scientific subdicipline that is related to the service/resource.'};
// export const               superCategoryDesc = {mandatory:  true, label: 'Supercategory', desc: 'A named group for a predefined list of categories.'};
export const                    categoryDesc = {mandatory: true,  label: 'Category', desc: 'A named group of services/resources that offer access to the same type of resource or capabilities.'};
export const                 subcategoryDesc = {mandatory: true,  label: 'Subcategory', desc: 'A named group of services/resources that offer access to the same type of resource or capabilities, within the defined service category'};
export const                 targetUsersDesc = {mandatory: true,  label: 'Target Users', addTitle: 'Target User', placeholder: 'Select target users...', desc: 'Type of users/customers that commissions a service/resource Provider to deliver a service.'};
export const                  accessTypeDesc = {mandatory: false, label: 'Access Type', addTitle: 'Access Type', placeholder: 'Select access type...', desc: 'The way a user can access the service/resource (Remote, Physical, Virtual, etc.)'};
export const                  accessModeDesc = {mandatory: false, label: 'Access Mode', addTitle: 'Access Mode', placeholder: 'Select access mode...', desc: 'Eligibility/criteria for granting access to users (excellence-based, free-conditionally, free etc.)'};
export const                        tagsDesc = {mandatory: false, label: 'Tags', addTitle: 'Tag', placeholder: 'Write tag...', desc: 'Keywords associated to the service/resource to simplify search by relevant keywords.'};

// Geographical and Language Availability Information //
export const    geographicalAvailabilityDesc = {mandatory: true, label: 'Geographical Availability', addTitle: 'Geographical Availability', placeholder: 'Select geographical availability...', desc: 'Locations where the service/resource is offered.'};
export const      languageAvailabilitiesDesc = {mandatory: true, label: 'Language Availability', addTitle: 'Language Availability', placeholder: 'Select language availability...', desc: 'Languages of the user interface of the service/resource.'};

// Location Information //
export const resourceGeographicLocationsDesc = {mandatory: false, label: 'Geographic Locations', addTitle: 'Geographic Locations', placeholder: 'Select geographic locations...', desc: 'List of geographic locations where data is stored and processed.'};

// Contact Information --> //
// Main Contact/Service Owner
export const        mainContactFirstNameDesc = {mandatory: true,  label: 'Main Contact First Name ', placeholder: 'Write first name...', desc: 'First Name of the service/resource\'s main contact person/manager.'};
export const         mainContactLastNameDesc = {mandatory: true,  label: 'Main Contact Last Name', placeholder: 'Write last name...', desc: 'Last Name of the service/resource\'s main contact person/manager.'};
export const            mainContactEmailDesc = {mandatory: true,  label: 'Main Contact Email', placeholder: 'Write email...', desc: 'Email of the service/resource\'s main contact person/manager.'};
export const            mainContactPhoneDesc = {mandatory: false, label: 'Main Contact Phone', placeholder: 'Write phone...', desc: 'Telephone of the service/resource\'s main contact person/manager.'};
export const         mainContactPositionDesc = {mandatory: false, label: 'Main Contact Position', placeholder: 'Write position...', desc: 'Position of the service/resource\'s main contact person/manager.'};
export const     mainContactOrganisationDesc = {mandatory: false, label: 'Main Contact Organisation', placeholder: 'Write organisation...', desc: 'The Organisation to which the contact is affiliated.'};

// Public Contact //
export const      publicContactFirstNameDesc = {mandatory: false, label: 'Public Contact First Name', placeholder: 'Write first name...', desc: 'First Name of the service/resource\'s contact person to be displayed at the portal.'};
export const       publicContactLastNameDesc = {mandatory: false, label: 'Public Contact Last Name', placeholder: 'Write last name...', desc: 'Last Name of the service/resource\'s contact person to be displayed at the portal.'};
export const          publicContactEmailDesc = {mandatory: true,  label: 'Public Contact Email', placeholder: 'Write email...', desc: 'Email of the service/resource\'s contact person to be displayed at the portal.'};
export const          publicContactPhoneDesc = {mandatory: false, label: 'Public Contact Phone', placeholder: 'Write phone...', desc: 'Telephone of the service/resource\'s contact person to be displayed at the portal.'};
export const       publicContactPositionDesc = {mandatory: false, label: 'Public Contact Position', placeholder: 'Write position...', desc: 'Position of the service/resource\'s contact person to be displayed at the portal.'};
export const   publicContactOrganisationDesc = {mandatory: false, label: 'Public Contact Organisation', placeholder: 'Write organisation...', desc: 'The Organisation to which the contact is affiliated.'};

// Other
export const               helpdeskEmailDesc = {mandatory: true,  label: 'Helpdesk Email', placeholder: 'Write email...', desc: 'The email to ask more information from the Provider about this Resource.'};
export const        securityContactEmailDesc = {mandatory: true,  label: 'Security Contact Email', placeholder: 'Write email...', desc: 'The email to contact the Provider for critical security issues about this Resource.'};
// <-- Contact Information //

// Maturity Information //
export const    technologyReadinessLevelDesc = {mandatory: true,  label: 'Technology Readiness Level', placeholder: 'Select technology readiness level...', desc: 'The Technology Readiness Level of the service/resource.'};
export const                       phaseDesc = {mandatory: false, label: 'Life Cycle Status', placeholder: 'Write life cycle status...', desc: 'Phase of the service/resource lifecycle.'};
export const              certificationsDesc = {mandatory: false, label: 'Certifications', addTitle: 'Certification', placeholder: 'Write certifications...', desc: 'List of certifications obtained for the service (including the certification body).'};
export const                   standardsDesc = {mandatory: false, label: 'Standards', addTitle: 'Standard', placeholder: 'Write standards...', desc: 'List of standards supported by the service.'};
export const      openSourceTechnologiesDesc = {mandatory: false, label: 'Open Source Technologies', addTitle: 'Open Source Technology', placeholder: 'Write open source technologies...', desc: 'List of open source technologies supported by the service.'};
export const                     versionDesc = {mandatory: false, label: 'Version', placeholder: 'Write version...', desc: 'Version of the service/resource that is in force.'};
export const                  lastUpdateDesc = {mandatory: false, label: 'Last Update', placeholder: 'Write last update...', desc: 'Date of the latest update of the service/resource.'};
export const                   changeLogDesc = {mandatory: false, label: 'Change Log', addTitle: 'Change Log', placeholder: 'Write change log...', desc: 'Summary of the service/resource features updated from the previous version.'};

// Dependencies Information //
export const            requiredServicesDesc = {mandatory: false, label: 'Required Resources', addTitle: 'Required Resource', placeholder: 'Select required resources...', desc: 'List of other services/resources required with this service/resource.'};
export const             relatedServicesDesc = {mandatory: false, label: 'Related Resources', addTitle: 'Related Resource', placeholder: 'Select related resources...', desc: 'List of other services/resources that are commonly used with this service/resource.'};
export const            relatedPlatformsDesc = {mandatory: false, label: 'Related Platforms', addTitle: 'Related Platform', placeholder: 'Write related platform...', desc: 'List of suites or thematic platforms in which the Resource is engaged or Providers (Provider groups) contributing to this Resource.'};

// Attribution Information //
export const                 fundingBodyDesc = {mandatory: false, label: 'Funding Body', addTitle: 'Funder', placeholder: 'Select funding body...', desc: 'Name of the funding body that supported the development and/or operation of the service.'};
export const              fundingProgramDesc = {mandatory: false, label: 'Funding Program', addTitle: 'Funding Program', placeholder: 'Select funding program...', desc: 'Name of the funding program that supported the development and/or operation of the service.'};
export const            grantProjectNameDesc = {mandatory: false, label: 'Grant/Project Name', addTitle: 'Grant/Project Name', placeholder: 'Write grant/project name...', desc: 'Name of the project that supported the development and/or operation of the service.'};

// Management Information //
export const                helpdeskPageDesc = {mandatory: false, label: 'Helpdesk Page', placeholder: 'helpdesk page URL', desc: 'The URL to a webpage with the contact person or helpdesk to ask more information from the service/resource Provider about this service.'};
export const                  userManualDesc = {mandatory: false, label: 'User Manual', placeholder: 'user manual URL', desc: 'Link to the service/resource user manual and documentation.'};
export const                  termsOfUseDesc = {mandatory: false, label: 'Terms Of Use', placeholder: 'terms of use URL', desc: 'Webpage describing the rules, service/resource conditions and usage policy which one must agree to abide by in order to use the service.'};
export const               privacyPolicyDesc = {mandatory: false, label: 'Privacy Policy', placeholder: 'privacy policy URL', desc: 'Link to the privacy policy applicable to the service.'};
export const                accessPolicyDesc = {mandatory: false, label: 'Access Policy', placeholder: 'access policy URL', desc: 'Webpage to the information about the access policies that apply.'};
export const                serviceLevelDesc = {mandatory: false, label: 'Service Level', placeholder: 'service level URL', desc: 'Webpage with the information about the levels of performance that a service/resource Provider is expected to deliver.'};
export const         trainingInformationDesc = {mandatory: false, label: 'Training Information', placeholder: 'training information URL', desc: 'URL for training information'};
export const            statusMonitoringDesc = {mandatory: false, label: 'Status Monitoring', placeholder: 'status monitoring URL', desc: 'Webpage with monitoring information about this service'};
export const                 maintenanceDesc = {mandatory: false, label: 'Maintenance', placeholder: 'maintenance URL', desc: 'Webpage with information about planned maintenance windows for this service'};

// Access and Order Information //
export const                   orderTypeDesc = {mandatory: true,  label: 'Order Type', placeholder: 'Select order type...', desc: 'Describe if the service/resource can be accessed with an ordering process.'};
export const                       orderDesc = {mandatory: false, label: 'Order', placeholder: 'order URL', desc: 'Webpage through which an order for the service/resource can be placed.'};

// Financial Information //
export const                paymentModelDesc = {mandatory: false, label: 'Payment Model', placeholder: 'payment model URL', desc: 'Webpage with the supported payment models and restrictions that apply to each of them.'};
export const                     pricingDesc = {mandatory: false, label: 'Pricing', placeholder: 'pricing URL', desc: 'Webpage with the information on the price scheme for this Resource in case the customer is charged for.'};



/** Service Provider form fields **/

// Basic Information //
export const                       fullNameDesc = {mandatory: true, label: 'Name', placeholder: 'Write full name...', desc: 'Full Name of the organisation providing/offering the service/resource.'};
export const                   abbreviationDesc = {mandatory: true, label: 'Abbreviation', placeholder: 'Write abbreviation...', desc: 'Abbreviation or short name of the Provider.'};
export const                        websiteDesc = {mandatory: true, label: 'Website', placeholder: 'webpage URL', desc: 'Webpage with information about the Provider.'};
export const                    legalEntityDesc = {mandatory: true, label: 'Legal Entity', desc: 'A Y/N question to define whether the Provider is a Legal Entity or not.'};
export const                    legalStatusDesc = {mandatory: false, label: 'Legal Status', placeholder: 'Write legal status...', desc: 'For independent legal entities (1) - legal status of the Provider. For embedded Providers (2) - legal status of the hosting legal entity.'};

// Marketing Information //
export const            providerDescriptionDesc = {mandatory: true, label: 'Description', placeholder: 'Write a description...', desc: 'The description of the Provider.'};
export const                   providerLogoDesc = {mandatory: true, label: 'Logo', placeholder: 'logo URL', desc: 'Link to the logo/visual identity of the Provider. The logo will be visible at the Portal. To obtain the link:  Go to the Service Provider\'s website --> Right Click on the Service Provider\'s logo on the website --> Select "Copy Image Link" --> Paste it in the above field.'};
export const             providerMultimediaDesc = {mandatory: false, label: 'Multimedia', addTitle: 'Multimedia', placeholder: 'Write link to multimedia...', desc: 'Link to video, slideshow, photos, screenshots with details of the Provider.'};

// Classification Information //
export const       providerScientificDomainDesc = {mandatory: false, label: 'Scientific Domain', placeholder: 'Select scientific domain...', desc: 'A named group of Providers that offer access to the same type of resource or capabilities.'};
export const   providerScientificSubdomainsDesc = {mandatory: false, label: 'Scientific Subdomain', placeholder: 'Select scientific subdomain after selecting scientific domain...', desc: 'A named group of Providers that offer access to the same type of resource or capabilities, within the defined domain.'};
export const                   providerTagsDesc = {mandatory: false, label: 'Tags', addTitle: 'Tag', placeholder: 'Write tag...', desc: 'Keywords associated to the Provider to simplify search by relevant keywords.'};

// Location Information //
export const            streetNameAndNumberDesc = {mandatory: true, label: 'Street Name and Number', placeholder: 'Write street name and number...', desc: 'Street and Number of incorporation or Physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'};
export const                     postalCodeDesc = {mandatory: true, label: 'Postal Code', placeholder: 'Write postal code...', desc: 'Postal code of incorporation or Physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile providers.'};
export const                           cityDesc = {mandatory: true, label: 'City', placeholder: 'Write city...', desc: 'City of incorporation or Physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile providers.'};
export const                         regionDesc = {mandatory: false, label: 'Region', placeholder: 'Write region...', desc: 'Region of incorporation or Physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile providers.'};
export const                        countryDesc = {mandatory: true, label: 'Country', placeholder: 'Write country...', desc: 'Establishment/Registration Country of the organisation. Usually this is the location of the headquarters of the organisation. In the case of distributed/virtual Providers the country of the coordinating office.'};

// Contact Information --> //
// Main Contact/Provider Manager
export const   providerMainContactFirstNameDesc = {mandatory: true, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Provider\'s main contact person/Provider manager.'};
export const    providerMainContactLastNameDesc = {mandatory: true, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Provider\'s main contact person/Provider manager.'};
export const       providerMainContactEmailDesc = {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Provider\'s main contact person/Provider manager.'};
export const       providerMainContactPhoneDesc = {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the Provider\'s main contact person/Provider manager.'};
export const    providerMainContactPositionDesc = {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Provider\'s main contact person/Provider manager.'};
// Public Contact
export const providerPublicContactFirstNameDesc = {mandatory: false, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Provider\'s contact person to be displayed at the portal.'};
export const  providerPublicContactLastNameDesc = {mandatory: false, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Provider\'s contact person to be displayed at the portal.'};
export const     providerPublicContactEmailDesc = {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Provider\'s contact person to be displayed at the portal or general email to contact organisation.'};
export const     providerPublicContactPhoneDesc = {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the Provider\'s contact person to be displayed at the portal or general email to contact organisation.'};
export const  providerPublicContactPositionDesc = {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Provider\'s contact person to be displayed at the portal.'};
// <-- Contact Information //

// Maturity Information //
export const                lifeCycleStatusDesc = {mandatory: false, label: 'Life Cycle Status', placeholder: 'Write life cycle status...', desc: 'Current status of the Provider life-cycle.'};
export const         providerCertificationsDesc = {mandatory: false, label: 'Certifications', addTitle: 'Certification', placeholder: 'Write certifications...', desc: 'List of certifications obtained for the Provider (including the certification body and any certificate number or URL if available).   NOTE this is not for certifications specific to the service, which are under Service Description.'};

// Other //
export const             hostingLegalEntityDesc = {mandatory: false, label: 'Hosting Legal Entity', placeholder: 'Write hosting legal entity...', desc: 'Name of the organisation/institution legally hosting (housing) the RI or its coordinating centre. A distinction is made between: (1) RIs that are self-standing and have a defined and distinct legal entity, (2) RI that are embedded into another institution which is a legal entity (such as a university, a research organisation, etc.). If (1) - name of the RI, If (2) - name of the hosting organisation.'};
export const         participatingCountriesDesc = {mandatory: false, label: 'Participating Countries', addTitle: 'Participating Country', placeholder: 'Select participating countries...', desc: 'Providers that are funded by several countries should list here all supporting countries (including the Coordinating country).'};
export const                    affiliationDesc = {mandatory: false, label: 'Affiliations', addTitle: 'Affiliation', placeholder: 'Write affiliations...', desc: 'Providers that are members or affiliated or associated with other organisations should list those organisations here.'};
export const                       networksDesc = {mandatory: false, label: 'Networks', addTitle: 'Network', placeholder: 'Select network...', desc: 'Select the networks the Provider is participating in.'};
export const                 structureTypesDesc = {mandatory: false, label: 'Structure Type', addTitle: 'Structure Type', placeholder: 'Select structure type...', desc: 'Defines the Provider structure type (single-sited, distributed, mobile, virtual, etc.)'};
export const                    ESFRIDomainDesc = {mandatory: false, label: 'ESFRI Domain', addTitle: 'ESFRI Domain', placeholder: 'Select ESFRI domain...', desc: 'ESFRI domain classification. '};
export const                      ESFRITypeDesc = {mandatory: false, label: 'ESFRI Type', placeholder: 'Select ESFRI type...', desc: 'If the RI is (part of) an ESFRI project indicate how the RI participates: a) RI is node of an ESFRI project, b) RI is an ESFRI project, c) RI is an ESFRI landmark.'};
export const         merilScientificDomainsDesc = {mandatory: false, label: 'MERIL Scientific Domain', placeholder: 'Select MERIL scientific domain...', desc: 'MERIL scientific domain classification'};
export const      merilScientificSubdomainsDesc = {mandatory: false, label: 'MERIL Scientific Subdomain', placeholder: 'Select MERIL scientific subdomain after selecting MERIL scientific domain...', desc: 'MERIL scientific subdomain classification'};
export const                areasOfActivityDesc = {mandatory: false, label: 'Areas of Activity', addTitle: 'Area of Activity', placeholder: 'Write areas of activity...', desc: 'Basic research, Applied research or Technological development'};
export const        societalGrandChallengesDesc = {mandatory: false, label: 'Societal Grand Challenges', addTitle: 'Societal Grand Challenge', placeholder: 'Write societal grand challenges...', desc: 'Provider’s participation in the grand societal challenges as defined by the European Commission (Horizon 2020)'};
export const               nationalRoadmapsDesc = {mandatory: false, label: 'National Roadmaps', addTitle: 'National Roadmap', placeholder: 'Write national roadmaps...', desc: 'Is the Provider featured on the national roadmap for research infrastructures'};


