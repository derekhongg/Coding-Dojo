class BankAccount:
    bank_name = "Dojo National Bank"
    accounts = []
    #Constructor
    def __init__(self, first_name, int_rate, balance): #interest rates and balance
        self.first_name = first_name
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"{self.first_name}, Your Balance is: ${self.balance}")
    def yield_interest(self):
        if self.balance > 0:
            self.balance *= (1 + self.int_rate)
            return self
        else:
            print("Your account cannont accumulate interest, please deposit until your account is positive.")
    @classmethod
    def all_accounts(cls):
        for accounts in cls.accounts:
            accounts.display_account_info()



andre = BankAccount("Derek", 0.1, 12000)
peter = BankAccount("Peter", 0.15, 5000)

andre.deposit(2000).deposit(4000).deposit(1245).withdraw(3000)
peter.deposit(13000).deposit(12534).withdraw(3547).withdraw(1264).withdraw(2184).withdraw(1500)

BankAccount.all_accounts()