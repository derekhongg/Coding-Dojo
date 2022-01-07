class BankAccount:
    bank_name = "Dojo National Bank"
    accounts = []
    #Constructor
    def __init__(self, int_rate, balance): #interest rates and balance
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        return f"Your Balance is: ${self.balance}"
    def yield_interest(self):
        if self.amount > 0:
            self.amount *= (1 + self.int_rate)
            return self
        else:
            print("Your account cannont accumulate interest, please deposit until your account is positive.")


class User:
    population = 0
    #Constructor
    def __init__(self, first_name):
        self.first_name = first_name
        self.account = BankAccount(0.05, 1000)
        User.population += 1

    
    def display_user_balance(self):
        print(f"User: {self.first_name}, Balance: {self.account.display_account_info()}")
        return self

    def transfer_money(self, amount, user):
        self.amount -= amount
        user.amount += amount
        return self
        return user

derek = User("Derek")

derek.account.deposit(1243).deposit(1000)
derek.display_user_balance()