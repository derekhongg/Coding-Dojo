class User:
    #Constructor
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.amount = 0

    def make_deposit(self, amount):
        self.amount += amount
        return self
    
    def make_withdrawal(self, amount):
        self.amount-= amount
        return self
    
    def display_user_balance(self):
        print(f"User: {self.first_name} {self.last_name}, Balance: {self.amount}")
        return self

    def transfer_money(self, amount, user):
        self.amount -= amount
        user.amount += amount
        return self
        return user

derek = User("Derek", "Hong", 24)
peter = User("Peter", "Mach", 24)
james = User("James", "Lee", 25)
andre = User("Andre", "Huang", 26)

derek.make_deposit(20000).make_deposit(2350).make_deposit(6270).make_withdrawal(6000).transfer_money(1000, andre).display_user_balance()
peter.make_deposit(12389).make_deposit(11389).make_withdrawal(6000).make_withdrawal(2000).display_user_balance()
james.make_deposit(50000).make_withdrawal(6000).make_withdrawal(5000).make_withdrawal(13847).display_user_balance()
andre.make_deposit(11345).display_user_balance()