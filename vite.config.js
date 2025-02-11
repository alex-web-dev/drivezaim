export default {
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        indexVariant2: 'index-variant-2.html',
        getLoan: 'get-loan.html',
        getLoanNoOffice: 'get-loan-no-office.html',
        payOffLoan: 'pay-off-loan.html',
        payOffLoanNoOffice: 'pay-off-loan-no-office.html',
        about: 'about.html',
        team: 'team.html',
      },
    },
  },
};