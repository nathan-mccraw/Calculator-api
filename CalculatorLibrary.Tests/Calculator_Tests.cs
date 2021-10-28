using InfrastructureLibrary;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace CalculatorLibrary.Tests
{
    [TestFixture]
    public class Calculator_Tests
    {
        private Calculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new Calculator();
        }

        [Test]
        [TestCase(7, 11, "+", 18)]
        [TestCase(-7, 11, "+", 4)]
        [TestCase(7, -11, "+", -4)]
        [TestCase(-7, -11, "+", -18)]
        [TestCase(7.0021, 11.12, "+", 18.1221)]
        public void Calculations_Add_ReturnsExpected(decimal firstOperand, decimal secondOperand, string operation, decimal expected)
        {
            decimal actual = _calculator.Calculate(firstOperand, secondOperand, operation);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(14, 7, "/", 2)]
        [TestCase(-14, 7, "/", -2)]
        [TestCase(1, 2, "/", 0.5)]
        [TestCase(1, -4, "/", -0.25)]
        public void Calculations_Divide_ReturnsExpected(decimal firstOperand, decimal secondOperand, string operation, decimal expected)
        {
            decimal actual = _calculator.Calculate(firstOperand, secondOperand, operation);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(1, 2, "a")]
        [TestCase(1, 2, "=")]
        [TestCase(1, 2, "1")]
        public void Calculations_OperatorDoeNotExist_ReturnsException(decimal firstOperand, decimal secondOperand, string operation)
        {
            Assert.Throws<Exception>(() => _calculator.Calculate(firstOperand, secondOperand, operation));
        }

        [Test]
        [TestCase(1, 0, "/")]
        public void Calculations_DivideByZero_ReturnsException(decimal firstOperand, decimal secondOperand, string operation)
        {
            Assert.That(() => _calculator.Calculate(firstOperand, secondOperand, operation), Throws.TypeOf<DivideByZeroException>());
        }

        [Test]
        [TestCase("+")]
        [TestCase("/")]
        public void AvailableOperators_Always_ReturnsExpected(string expected)
        {
            IEnumerable<string> actual;
            actual = _calculator.AvailableOperators();
            Assert.Contains(expected, (System.Collections.ICollection)actual);
        }

        [Test]
        [TestCase("=")]
        [TestCase("2")]
        public void AvailableOperators_OperatorDoesNotExist_DoesNotContain(string notExpected)
        {
            CollectionAssert.DoesNotContain(_calculator.AvailableOperators(), notExpected);
        }
    }
}