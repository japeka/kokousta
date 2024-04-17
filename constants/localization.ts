export const localization = {
    formFieldLabel__username: 'Käyttäjätili',
    formFieldLabel__emailAddress: 'Sähköpostiosoite',
    formFieldLabel__password: 'Salasana',
    badge__thisDevice: 'Tämä laite',
    badge__primary: 'ensijainen',
    formButtonPrimary: 'Jatka',
    formFieldLabel__confirmDeletion: 'Vahvista poisto',
    userButton: {
      action__manageAccount: 'Hallitse tilitietojasi',
      action__signOut: 'Kirjaudu ulos',
    },
    userProfile: {
      formButtonReset: 'Peruuta',
      deletePage: {
        title: 'Poista tili',
        messageLine1: 'Oletko varma, että haluat poistaa tilisi?',
        messageLine2: 'Tämä toiminto on peruuttamaton.',
        actionDescription: 'Kirjoita "Delete account" vahvistaaksesi poiston',
        confirm: 'Poista tili',
      },
      start: {
        headerTitle__security: 'Tietoturva',
        headerSubtitle__security: 'Tietoturva-asetukset',
        headerTitle__account: 'Tilitiedot',
        headerSubtitle__account: 'Hallitse tilitietojasi',
        activeDevicesSection:{
          title: 'Aktiiviset laitteet'
        },
        passwordSection: {
          title: 'Salasana',
          primaryButton__setPassword: 'Aseta salasana',
        },
        dangerSection:{
          title: 'Vaara',
          deleteAccountTitle: 'Poista tili',
          deleteAccountButton: 'Poista tili',
          deleteAccountDescription: 'Poista tilisi ja kaikki liitetyt laitteet'
        },
        profileSection:{
          title: 'Profiili'
        },
        usernameSection: {
          title: 'Käyttäjätunnus',
          primaryButton__changeUsername: 'Vaihda käyttäjätunnus',
        },
        emailAddressesSection: {
          title: 'Sähköpostiosoitteet',
          primaryButton: 'Lisää sähköpostiosoite',
        },
        connectedAccountsSection: {
          title: 'Liitetyt tilit',
          primaryButton: 'Liitä tili',
        },
  
      }
    },
    socialButtonsBlockButton: "Sign In with {{provider|titleize}}",
    formFieldLabel__emailAddress_username: 'Sähköpostiosoite tai käyttäjätunnus',
    dividerText: 'tai',
    signIn: {
      start: {
        title: 'Kirjaudu sisään',
        subtitle: 'jatkaaksesi {{applicationName}} -sovellukseen',
        actionText: 'Eikö sinulla ole tiliä?',
        actionLink: 'Luo tili'
      }
    }, 
    signUp: {
      start: {
        title: 'Luo oma tili',
        subtitle: 'jatkaaksesi {{applicationName}} -sovellukseen',
        actionText: 'Onko sinulla jo tili?',
        actionLink: 'Kirjaudu sisään',
      },
      emailLink: {
        title: 'Verify your email',
        subtitle: 'to continue to {{applicationName}}',
        formTitle: 'Verification link',
        formSubtitle: 'Use the verification link sent to your email address',
        resendButton: "Didn't receive a link? Resend",
        verified: {
          title: 'Successfully signed up',
        },
        loading: {
          title: 'Signing up...',
        },
        verifiedSwitchTab: {
          title: 'Successfully verified email',
          subtitle: 'Return to the newly opened tab to continue',
          subtitleNewTab: 'Return to previous tab to continue',
        },
      },
      emailCode: {
        title: 'Verify your email',
        subtitle: 'to continue to {{applicationName}}',
        formTitle: 'Verification code',
        formSubtitle: 'Enter the verification code sent to your email address',
        resendButton: "Didn't receive a code? Resend",
      },
      phoneCode: {
        title: 'Verify your phone',
        subtitle: 'to continue to {{applicationName}}',
        formTitle: 'Verification code',
        formSubtitle: 'Enter the verification code sent to your phone number',
        resendButton: "Didn't receive a code? Resend",
      },
      continue: {
        title: 'Fill in missing fields',
        subtitle: 'to continue to {{applicationName}}',
        actionText: 'Have an account?',
        actionLink: 'Sign in',
      },
    },
  };
  