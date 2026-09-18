# Activer l'envoi réel des e-mails du formulaire de contact

## Situation actuelle
- Le formulaire envoie vers **projet.idee@ac-lille.fr** via une Edge Function `send-contact-email` qui utilise **Resend**.
- Resend fonctionne en mode test : les e-mails partent de `onboarding@resend.dev` et sont refusés (ou limités à la boîte du compte Resend).
- Pour que les demandes arrivent réellement, il faut vérifier un **domaine d'expédition** chez Resend et envoyer depuis une adresse de ce domaine.

## Étape 1 — Côté utilisateur (à faire dans Resend)
1. Créer un compte sur [resend.com](https://resend.com) (ou utiliser l'existant).
2. Ajouter le domaine depuis lequel on veut envoyer (ex. `ac-lille.fr` ou un domaine possédé par le projet) dans **Domains**.
3. Ajouter les enregistrements DNS fournis par Resend (SPF + DKIM) chez le gestionnaire du domaine.
   - ⚠️ Si le domaine est `ac-lille.fr`, c'est l'académie qui gère les DNS : il faudra passer par leur service informatique, ou utiliser un autre domaine dont vous contrôlez les DNS.
4. Attendre la vérification du domaine dans Resend (quelques minutes à quelques heures).
5. Créer une **clé API** Resend et la communiquer (elle sera stockée comme secret du projet, jamais en clair dans le code).

## Étape 2 — Côté Lovable (je m'en charge)
1. Enregistrer la clé API comme secret `RESEND_API_KEY`.
2. Modifier `supabase/functions/send-contact-email/index.ts` : remplacer l'expéditeur `onboarding@resend.dev` par une adresse du domaine vérifié (ex. `contact@votre-domaine.fr`), avec un nom d'affichage « IDÉE ».
3. Redéployer la fonction et tester un envoi réel depuis le formulaire.

## Étape 3 — Vérification
- Soumettre le formulaire de test et confirmer que le message arrive bien dans la boîte projet.idee@ac-lille.fr.
- Vérifier les logs de la fonction en cas d'erreur.

## Ce dont j'ai besoin de vous
- Le domaine d'expédition que vous souhaitez utiliser et dont vous (ou l'académie) pouvez modifier les DNS.
- La clé API Resend une fois le domaine vérifié.
