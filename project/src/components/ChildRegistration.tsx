import React, { useState } from 'react';
import { Save, Calendar, Phone, MapPin, Baby, QrCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ChildRegistration: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    childName: '',
    childNameTamil: '',
    motherName: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    birthWeight: '',
    birthPlace: '',
    deliveryType: '',
    motherPhone: '',
    village: '',
    address: '',
    bloodGroup: '',
    aadharNumber: '',
    birthCertificateNumber: '',
    healthId: '',
    specialNeeds: '',
    allergies: ''
  });

  const [qrGenerated, setQrGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Child registration data:', formData);
    // Generate health ID and QR code
    const healthId = `MCVS${Date.now()}`;
    setFormData(prev => ({ ...prev, healthId }));
    setQrGenerated(true);
  };

  const generateQRCode = () => {
    // In a real app, this would generate an actual QR code
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(JSON.stringify({
      healthId: formData.healthId,
      childName: formData.childName,
      dateOfBirth: formData.dateOfBirth,
      motherPhone: formData.motherPhone
    }))}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Baby className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Child Registration</h1>
            <p className="text-gray-600">குழந்தை பதிவு</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Child Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Baby className="w-5 h-5 mr-2" />
              Child Information / குழந்தை தகவல்
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Child's Name (English) *
                </label>
                <input
                  type="text"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  குழந்தையின் பெயர் (Tamil)
                </label>
                <input
                  type="text"
                  value={formData.childNameTamil}
                  onChange={(e) => setFormData({ ...formData, childNameTamil: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth / பிறந்த தேதி *
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender / பாலினம் *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male / ஆண்</option>
                  <option value="female">Female / பெண்</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Weight (kg) / பிறப்பு எடை
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.birthWeight}
                  onChange={(e) => setFormData({ ...formData, birthWeight: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place of Birth / பிறந்த இடம்
                </label>
                <select
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="home">Home / வீடு</option>
                  <option value="hospital">Hospital / மருத்துவமனை</option>
                  <option value="phc">PHC / PHC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Parent Information / பெற்றோர் தகவல்
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Name / தாயின் பெயர் *
                </label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Name / தந்தையின் பெயர்
                </label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Phone / தாயின் கைபேசி எண் *
                </label>
                <input
                  type="tel"
                  value={formData.motherPhone}
                  onChange={(e) => setFormData({ ...formData, motherPhone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Village / கிராமம் *
                </label>
                <input
                  type="text"
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Information / கூடுதல் தகவல்
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group / இரத்த வகை
                </label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Certificate Number / பிறப்பு சான்றிதழ் எண்
                </label>
                <input
                  type="text"
                  value={formData.birthCertificateNumber}
                  onChange={(e) => setFormData({ ...formData, birthCertificateNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Needs / சிறப்பு தேவைகள்
                </label>
                <input
                  type="text"
                  value={formData.specialNeeds}
                  onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any special medical needs"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Known Allergies / அறியப்பட்ட ஒவ்வாமைகள்
                </label>
                <input
                  type="text"
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any known allergies"
                />
              </div>
            </div>
          </div>

          {/* Generated Health ID and QR Code */}
          {qrGenerated && (
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <QrCode className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-lg font-semibold text-green-800">Health ID Generated</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-700 mb-2">Health ID:</p>
                  <p className="text-xl font-mono font-bold text-gray-900 bg-white p-3 rounded border">
                    {formData.healthId}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={generateQRCode()}
                      alt="Health ID QR Code"
                      className="w-32 h-32"
                    />
                    <p className="text-xs text-center mt-2 text-gray-600">Scan for child info</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel / ரத்து
            </button>
            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Register Child / குழந்தையை பதிவு செய்
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChildRegistration;